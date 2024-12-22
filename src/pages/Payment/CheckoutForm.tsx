import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreatePaymentIntentMutation } from "../../redux/api/baseApi";
import { setClientSecret } from "../../redux/features/paymentSlice";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const cartItems = useSelector((state: any) => state.cart.items);
  const { clientSecret } = useSelector((state: any) => state.payment);

  console.log(clientSecret);

  const subTotalPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );
  const vat = (subTotalPrice * 100) / 15;
  const grandTotalPrice = subTotalPrice + vat;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    //Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {},
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment Intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }

    if (error) {
      console.log("Error: ", error);
      setError(error.message);
    } else {
      console.log("Payment Method: ", paymentMethod);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary my-4"
        disabled={!stripe || !clientSecret}
      >
        {processing ? "Processing" : "Pay"}
      </button>
      <p className="text-red-600">{error}</p>
      { transactionId && <p className="text-green-600" >Your Transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;

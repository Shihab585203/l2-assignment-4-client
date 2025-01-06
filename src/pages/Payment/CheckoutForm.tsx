import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreatePaymentDataMutation } from "../../redux/api/baseApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/cartSlice";

type PaymentMethodType = "card" | "cash";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postCode: string;
}

interface CartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("card");
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postCode: "",
  });

  const cartItems = useSelector(
    (state: { cart: { items: CartItem[] } }) => state.cart.items
  );
  const { clientSecret } = useSelector((state: any) => state.payment);
  const [createPaymentData] = useCreatePaymentDataMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(clientSecret);

  const subTotalPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );
  const vat = (subTotalPrice / 100) * 15;
  const grandTotalPrice = subTotalPrice + vat;

  const stripe = useStripe();
  const elements = useElements();

  const handleUserDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value as PaymentMethodType);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (paymentMethod === "cash") {
      const cashOrderData = {
        name: userDetails.name,
        email: userDetails.email,
        price: grandTotalPrice,
        phone: userDetails.phone,
        transactionId: `SPG-${Date.now()}`,
        date: new Date(),
        cartIds: cartItems.map((item) => item._id),
        status: "pending",
        paymentMethod: "cash",
      };

      try {
        await createPaymentData(cashOrderData).unwrap();
        dispatch(clearCart());
        navigate("/");
        return;
      } catch (err) {
        setError("Failed to Place Order");
        return;
      }
    }

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethodError) {
      console.log("Error: ", error);
      setError(
        paymentMethodError?.message ||
          "An error occured with this payment method"
      );
      setProcessing(false);
      return;
    }

    //Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
            address: {
              city: userDetails.city,
              postal_code: userDetails.postCode,
            },
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment Intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        //Save the payment in the database
        const paymentUserData = {
          name: userDetails.name,
          email: userDetails.email,
          price: grandTotalPrice,
          phone: userDetails.phone,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cartItems.map((item) => item._id),
          status: "pending",
          paymentMethod: "card",
        };

        try {
          await createPaymentData(paymentUserData).unwrap();
          dispatch(clearCart());
          navigate("/");
        } catch (err) {
          setError(
            "Payment Successfull but Failed to Save Data. Please Contact Support."
          );
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* User Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            value={userDetails.city}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>

          <input
            type="text"
            name="postCode"
            value={userDetails.postCode}
            onChange={handleUserDetailsChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Method
        </label>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <span className="ml-2">Card Payment</span>
          </label>
        </div>
      </div>

      {/* Card Payment Section */}
      {paymentMethod === "card" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
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
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-4 w-full"
        disabled={
          (paymentMethod === "card" && (!stripe || !clientSecret)) || processing
        }
      >
        {processing
          ? "Processing..."
          : paymentMethod === "card"
          ? "Pay Now"
          : "Place Order"}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      {transactionId && (
        <p className="text-green-600 mt-2">
          Your Transaction ID: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;

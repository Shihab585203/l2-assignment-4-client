import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import { useCreatePaymentIntentMutation } from "../redux/api/baseApi";
import { setClientSecret } from "../redux/features/paymentSlice";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  const handleIncrement = (_id: string) => {
    dispatch(incrementQuantity(_id));
  };

  const handleDecrement = (_id: string) => {
    dispatch(decrementQuantity(_id));
  };

  const handleRemoveFromCart = (_id: string) => {
    dispatch(removeFromCart(_id));
  };

  const subTotalPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );
  const vat = (subTotalPrice / 100) * 15;
  const grandTotal = subTotalPrice + vat;

  const handleCheckout = async () => {
    try {
      const response = await createPaymentIntent(grandTotal).unwrap();
      if (response.data) {
        dispatch(setClientSecret(response.data));
      } else {
        console.error("Client secret not found in the response.");
      }
    } catch (err) {
      console.error("Error creating payment intent:", err);
    }
  };

  return (
    <div className="overflow-x-auto pt-4">
      <table className="table my-20">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Products</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item: any) => (
            <tr key={item._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                </div>
              </td>
              <td>{item.category}</td>
              <td>
                <div className="flex items-center space-x-2 text-center">
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDecrement(item._id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <div className="flex flex-col gap-2">
                <div>
                  Sub Total: $<span>{subTotalPrice.toFixed(2)}</span>
                </div>
                <div>
                  VAT (15%): $<span>{vat.toFixed(2)}</span>
                </div>
                <div>
                  Grand Total: $<span>{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </th>
            <th>
              {cartItems.length ? (
                <Link to="/payment">
                  <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
                </Link>
              ) : (
                <button disabled className="btn btn-primary">
                  Checkout
                </button>
              )}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;

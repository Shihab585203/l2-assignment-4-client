import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/features/cartSlice";



const Cart = () => {
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (_id: string) => {
        dispatch(removeFromCart(_id))
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
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
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Cart
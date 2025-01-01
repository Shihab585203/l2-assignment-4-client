import { FaEdit, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";
import { RootState } from "../../redux/features/store";
import {
  useDeleteProductMutation,
  usePostCartProductMutation,
} from "../../redux/api/baseApi";
import { AiFillDelete } from "react-icons/ai";
import { MouseEvent } from "react";

type TProductProps = {
  _id: string;
  title: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};

const ProductsCard = ({
  _id,
  title,
  category,
  stockQuantity,
  brand,
  rating,
  description,
  price,
  image,
}: TProductProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [postCartProduct] = usePostCartProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddToCart = async () => {
    const isProductInCart = cartItems.some((item) => item._id === _id);

    if (isProductInCart) {
      toast.error("Product is already in the cart!");
      return;
    }

    try {
      const cartItem = {
        _id,
        title,
        price,
        image,
        category,
        quantity: 1,
      };

      const response = await postCartProduct(cartItem).unwrap();
      if (response) {
        dispatch(addToCart(cartItem));
        toast.success("Product Added Successfully");
      }
    } catch (err) {
      toast.error("Failed to Add to Cart Error!");
    }
  };

  const handleDeleteProduct = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await deleteProduct(_id);
    toast.success("Product Deleted Successfully");
  };

  return (
    <div className="card bg-base-100 w-[22rem] shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} />
          </PhotoView>
        </PhotoProvider>
      </figure>

      <div className="card-body nunito space-y-2">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <p className="">
            <span className="font-bold">Price: </span>{" "}
            <span className="font-semibold">{price}</span>
          </p>
          <p className="">
            <span className="font-bold">Category: </span>{" "}
            <span className="font-semibold">{category}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">
            <span className="font-bold">Stock: </span>{" "}
            <span className="font-semibold"> {stockQuantity}</span>
          </p>
          <p className="">
            <span className="font-bold">Brand: </span>
            <span className="font-semibold"> {brand}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Rating:</span>
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FaStar color="lightgray" />}
              fullSymbol={<FaStar color="gold" />}
              placeholderSymbol={<FaStarHalfAlt color="gold" />}
            />
          </div>
        </div>
        <p>{description.slice(0, 85)}...</p>
        <div className="card-actions justify-end">
          {/* Cart */}
          <button
            className="btn bg-red-500 hover:bg-red-600 text-white"
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
          </button>
          <Link to={`/products/${_id}`}>
            <button className="btn bg-red-500 hover:bg-red-600 text-white">
              Details <TbListDetails />
            </button>
          </Link>
          <button className="btn bg-red-500 hover:bg-red-600 text-white">
            <FaEdit />
          </button>
          <button onClick={handleDeleteProduct} className="btn bg-red-500 hover:bg-red-600 text-white">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

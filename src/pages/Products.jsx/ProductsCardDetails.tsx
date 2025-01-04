import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  usePostCartProductMutation,
} from "../../redux/api/baseApi";
import Rating from "react-rating";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ComponentType } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/features/store";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/features/cartSlice";

const TypedRating = Rating as ComponentType<any>;

const ProductsCardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((item: RootState) => item.cart.items);
  const [postCartProduct] = usePostCartProductMutation();

  const { data: product, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  const handleAddToCart = async () => {
    const isProductInCart = cartItems.some((item) => item._id === product.data._id);

    if (isProductInCart) {
      toast.error("Product is alreay in the cart!");
      return;
    }

    try {
      const cartItem = {
        _id: product?.data?._id,
        title: product?.data?.title,
        price: product?.data?.price,
        image: product?.data?.image,
        category: product?.data?.category,
        quantity: 1,
      };

      const response = await postCartProduct(cartItem).unwrap();

      if (response) {
        dispatch(addToCart(cartItem));
        toast.success("Product added successfully");
      }
    } catch (err) {
      console.log("details page cart error", err);
      toast.error("Failed to Add to Cart this product");
    }
  };

  return (
    <div className="w-11/12 mx-auto card card-side bg-base-100 my-20 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={product.data.image}>
            <img src={product.data.image} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body w-8/12 nunito space-y-3">
        <h2 className="card-title">{product.data.title}</h2>

        <div className="flex justify-between">
          <p className="">
            <span className="font-bold">Price: </span>{" "}
            <span className="font-semibold">{product.data.price}</span>
          </p>
          <p className="">
            <span className="font-bold">Category: </span>{" "}
            <span className="font-semibold">{product.data.category}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">
            <span className="font-bold">Quantity: </span>{" "}
            <span className="font-semibold"> {product.data.stockQuantity}</span>
          </p>
          <p className="">
            <span className="font-bold">Brand: </span>
            <span className="font-semibold"> {product.data.brand}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Rating:</span>
            <TypedRating
              initialRating={product.data.rating}
              readonly
              emptySymbol={<FaStar color="lightgray" />}
              fullSymbol={<FaStar color="gold" />}
              placeholderSymbol={<FaStarHalfAlt color="gold" />}
            />
          </div>
        </div>
        <p>{product.data.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary text-white"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardDetails;

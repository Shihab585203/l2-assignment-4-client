import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/baseApi";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductsCardDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  // const { title, price, stockQuantity, image, rating, description, category, brand } = product.data;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


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
            <Rating
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
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardDetails;

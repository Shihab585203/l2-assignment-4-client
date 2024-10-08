import { Link } from "react-router-dom";

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
  return (
    <div className="card bg-base-100 w-[22rem] shadow-xl">
      <figure>
        <img src={image} />
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
            <span className="font-bold">Quantity: </span>{" "}
            <span className="font-semibold"> {stockQuantity}</span>
          </p>
          <p className="">
            <span className="font-bold">Brand: </span>
            <span className="font-semibold"> {brand}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">
            <span className="font-bold">Rating: </span>{" "}
            <span className="font-semibold"> {rating}</span>
          </p>
        </div>
        <p>{description.slice(0, 85)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

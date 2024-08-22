import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductsCard from "./ProductsCard";

const ProductsCardContainer = () => {
  //From Server by RTK Query
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-8 my-10 w-11/12 mx-auto">
      {data?.data?.map((item) => (
        <ProductsCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default ProductsCardContainer;

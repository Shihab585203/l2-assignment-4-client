import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductsCard from "./ProductsCard";
import { RootState } from "../../redux/features/store";
import Category from "../Category/Category";

const ProductsCardContainer = () => {
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const category = useSelector(
    (state: RootState) => state.filteringCategory.category
  );

  const queryParams = {
    searchTerm: searchTerm || undefined,
    category: category || undefined,
    page: 1,
    limit: 10
  };

  const { data, isLoading, error } = useGetProductsQuery(queryParams);
  console.log(data?.data?.result);

  console.log('Query Response:', { data, error, isLoading });


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Category />
      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-8 my-10 w-11/12 mx-auto">
        {data?.data?.result?.map((item: any) => (
          <ProductsCard key={item._id} {...item} />
        ))}
      </div>
    </>
  );
};

export default ProductsCardContainer;

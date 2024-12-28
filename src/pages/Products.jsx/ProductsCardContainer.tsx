import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductsCard from "./ProductsCard";
import { RootState } from "../../redux/features/store";
import FilteringProducts from "./FilteringProducts/FilteringProducts";



const ProductsCardContainer = () => {
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const category = useSelector(
    (state: RootState) => state.filteringCategory.category
  );
  const sortBy = useSelector((state: RootState) => state.sorting.sortBy)

  const queryParams = {
    searchTerm: searchTerm || undefined,
    category: category || undefined,
    page: 1,
    limit: 10,
    sort: sortBy,
  };

  const { data, isLoading, error } = useGetProductsQuery(queryParams);
  console.log(data?.data?.result);

  console.log('Query Response:', { data, error, isLoading });


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-20" >
      <div className="flex justify-end items-end w-11/12 mx-auto gap-8">
      <FilteringProducts />
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto mb-16">
        {data?.data?.result?.map((item: any) => (
          <ProductsCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCardContainer;

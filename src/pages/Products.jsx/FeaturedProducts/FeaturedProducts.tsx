import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import ProductsCard from "../ProductsCard";
import { RootState } from "../../../redux/features/store";

const FeaturedProducts = () => {
  const sortBy = useSelector((state: RootState) => state.sorting.sortBy);
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const queryParams = {
    page: currentPage,
    limit: 10,
    sort: sortBy,
  };

  const { data, isLoading } = useGetProductsQuery(queryParams);

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  console.log("featured products", data?.data?.result);

  return (
    <div>
      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto mb-16">
        {data?.data?.result?.map((item: any) => (
          <div>
            <ProductsCard key={item._id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

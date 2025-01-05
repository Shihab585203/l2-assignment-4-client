import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductsCard from "./ProductsCard";
import { RootState } from "../../redux/features/store";
import FilteringProducts from "./FilteringProducts/FilteringProducts";
import PaginationButtons from "../Pagination/PaginationButtons";
import { useEffect } from "react";
import { setTotalPages } from "../../redux/features/paginationSlice";

const ProductsCardContainer = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const category = useSelector(
    (state: RootState) => state.filteringCategory.category
  );
  const sortBy = useSelector((state: RootState) => state.sorting.sortBy);
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const queryParams = {
    searchTerm: searchTerm || undefined,
    category: category || undefined,
    page: currentPage,
    limit: 10,
    sort: sortBy,
  };

  const { data, isLoading } = useGetProductsQuery(queryParams, {pollingInterval: 30000});

  useEffect(() => {
    if (data?.data) {
      const totalPages = Math.ceil(data.data.total / data.data.limit);
      dispatch(setTotalPages(totalPages));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-20">
      <div className="flex justify-end items-end w-11/12 mx-auto gap-8">
        <FilteringProducts />
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto mb-16">
        {data?.data?.result?.map((item: any) => (
          <ProductsCard key={item._id} {...item} />
        ))}
      </div>
      {/* Pagination */}
      <PaginationButtons />
    </div>
  );
};

export default ProductsCardContainer;

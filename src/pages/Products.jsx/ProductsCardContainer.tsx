import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductsCard from "./ProductsCard";
import { RootState } from "../../redux/features/store";
import { setCurrentPage, setTotalPages } from "../../redux/features/paginationSlice";
import { useEffect } from "react";


const ProductsCardContainer = () => {
  // const dispatch = useDispatch();

  const searchTerm = useSelector((state: RootState) => state.search.term);
  // const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  // const totalPages = useSelector((state: RootState) => state.pagination.totalPages);

  const { data, isLoading } = useGetProductsQuery( searchTerm );

//  useEffect(() => {
//     if (data?.totalCount) {
//       const pages = Math.ceil(data.totalCount / 10);
//       dispatch(setTotalPages(pages));
//     }
    
  // }, [data, dispatch])

  // const handlePageChange = (page: number) => {
  //   dispatch(setCurrentPage(page))
  // }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-8 my-10 w-11/12 mx-auto">
        {data?.data?.result?.map((item: any) => (
          <ProductsCard key={item._id} {...item} />
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-center py-4">
        <div className="join">
          {[...Array(totalPages)].map((_, index) => (
              <>
                <input
                  key={index + 1}
                  className={`join-item btn btn-square ${currentPage === index + 1 ? 'btn-active' : ''}`}
                  type="radio"
                  name="options"
                  aria-label={`${index + 1}`}
                  onClick={() => handlePageChange(index + 1)}
                  defaultChecked={currentPage === index + 1} />
              </>
            ))}
        </div>
      </div> */}
    </>
  );
};

export default ProductsCardContainer;

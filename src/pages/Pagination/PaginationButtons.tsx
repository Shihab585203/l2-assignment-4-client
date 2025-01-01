import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/features/store";
import { setCurrentPage } from "../../redux/features/paginationSlice";

const PaginationButtons = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.pagination
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
console.log(pages)
  return (
    <div className="join flex justify-center items-center my-6">
      <input
        type="radio"
        name="options"
        className={`join-item btn btn-square ${
          currentPage === 1 ? "btn-disabled" : ""
        }`}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        aria-label="Prev"
        disabled={currentPage === 1}
      />
      {pages.map((page) => (        
      <input
      key={page}
      type="radio"
      name="options"
      className={`join-item btn btn-square ${
        currentPage === page ? "btn-active" : ""
      }`}
      onClick={() => dispatch(setCurrentPage(page))}
      aria-label={page}
    />
      ))}
      <input
        type="radio"
        name="options"
        className={`join-item btn btn-square ${
          currentPage === totalPages ? "btn-disabled" : ""
        }`}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        aria-label="Next"
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default PaginationButtons;

import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/features/store";
import {
  clearSortType,
  setSortType,
} from "../../../redux/features/sortingSlice";

const FilteringProducts = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.sorting.sortBy);

  const handleSort = (sortType: any) => {
    dispatch(setSortType(sortType));
  };


  const handleClearFilter = () => {
    dispatch(clearSortType());
  };

  return (
    <div className="mr-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn w-52 m-1">
          <div className="flex justify-center items-center gap-2">
            <h3>Filter Products</h3>
            <IoIosArrowDown />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a
              onClick={() => handleSort("price-asc")}
              className={sortBy === "price-asc" ? "active" : ""}
            >
              Ascending by Price
            </a>
          </li>
          <li>
            <a
              onClick={() => handleSort("price-desc")}
              className={sortBy === "price-desc" ? "active" : ""}
            >
              Descending by Price
            </a>
          </li>
          <li>
            <a
              onClick={() => handleSort("brand-desc")}
              className={sortBy === "brand-desc" ? "active" : ""}
            >
              Brand
            </a>
          </li>
          <li>
            <a
              onClick={() => handleSort("rating-desc")}
              className={sortBy === "rating-desc" ? "active" : ""}
            >
              Rating
            </a>
          </li>
          <li>
            <a onClick={() => handleClearFilter()}>Clear Filter</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilteringProducts;

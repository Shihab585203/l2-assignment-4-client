import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/api/baseApi";
import { setCategory } from "../../redux/features/categorySlice";
import { Link } from "react-router-dom";

const Category = () => {
  const { data } = useGetCategoriesQuery(undefined);
  const dispatch = useDispatch();

  const categoryButtonDesign = [
    "btn",
    "bg-indigo-100",
    "w-24",
    "h-24",
    "rounded-full",
    "flex",
    "items-center",
    "justify-center",
    "hover:bg-primary",
    "hover:text-white",
    "transition",
    "duration-300",
  ];

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <h2 className="text-md text-4xl text-center font-semibold">Categories</h2>
      <div className="flex justify-center items-center w-11/12 mx-auto my-6 gap-4">
        <Link to="/products">
          <button
            className={categoryButtonDesign.join(" ")}
            onClick={() => handleCategoryClick("")}
          >
            All
          </button>
        </Link>
        {data?.data?.map((category: string) => (
          <Link to="/products">
            <button
              className={categoryButtonDesign.join(" ")}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;

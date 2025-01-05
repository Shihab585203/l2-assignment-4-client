import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/api/baseApi";
import { setCategory } from "../../redux/features/categorySlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fadeIn from "../framerMotion/fadeIn";

const Category = () => {
  const { data: categories } = useGetCategoriesQuery(undefined);
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
      <motion.h2 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-md text-4xl text-center font-semibold">Categories</motion.h2>
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex justify-center items-center w-11/12 mx-auto my-6 gap-4">
        <Link to="/products">
          <button
            className={categoryButtonDesign.join(" ")}
            onClick={() => handleCategoryClick("")}
          >
            All
          </button>
        </Link>
        {categories?.data?.map((category: string) => (
          <Link to="/products" key={category}>
            <button
              className={categoryButtonDesign.join(" ")}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default Category;

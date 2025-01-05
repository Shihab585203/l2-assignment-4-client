import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import fadeIn from "../framerMotion/fadeIn";
import FeaturedProducts from "../Products.jsx/FeaturedProducts/FeaturedProducts";
import Carousel from "./Carousel";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* Carousel Slider Part */}
      <Carousel />
      {/* Featured Products Part */}
      <div className="w-11/12 mx-auto my-16">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl text-center font-semibold my-6"
        >
          Featured Products
        </motion.h1>
        <FeaturedProducts />
        <Category />
        <Contact />
      </div>
    </>
  );
};

export default Home;

import Category from "../Category/Category";
import FeaturedProducts from "../Products.jsx/FeaturedProducts/FeaturedProducts";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Carousel Slider Part */}
      <Carousel />
      {/* Featured Products Part */}
      <div className="w-11/12 mx-auto my-16">
        <h1 className="text-2xl text-center font-semibold my-6">
          Featured Products
        </h1>
        <FeaturedProducts/>
        <Category/>
      </div>
    </>
  );
};

export default Home;

import ProductsCard from "../Products.jsx/ProductsCard";
import ProductsCardContainer from "../Products.jsx/ProductsCardContainer";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Carousel Slider Part */}
      <Carousel />
      {/* Featured Products Part */}
      <div className="w-11/12 mx-auto my-16">
        <h1 className="text-2xl text-center font-semibold">
          Featured Products
        </h1>
        <ProductsCardContainer/>
      </div>
    </>
  );
};

export default Home;

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/G0h0Myg/carousel-1.jpg" className="w-full" />
        <div className="quote-overlay absolute inset-0 flex items-center justify-center flex-col">
          <div className="w-8/12 mx-auto space-y-9 text-white text-center">
            <p className="pacifico text-white text-center text-4xl p-4 rounded">
              20% Discount on FC Barcelona's Latest Sleeve T-Shirt!
            </p>
            <p className="nunito text-lg font-semibold">
              "Get 20% off FC Barcelona's latest sleeve T-shirt! Show your team
              pride with this stylish addition to your wardrobe. Don't miss
              out—grab yours now and support Barça in style!"
            </p>
            <button className="btn nunito bg-primary border-none text-white text-lg hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Kh6HQF3/carousel-2.jpg" className="w-full" />
        <div className="quote-overlay absolute inset-0 flex flex-col items-center justify-center">
          <p className="w-8/12 pacifico text-center text-white text-2xl p-4 rounded">
            15% Discount on Real Madrid CF's Latest Sleeve T-Shirt!
          </p>
          <button className="btn nunito bg-primary border-none text-white text-lg hover:text-black">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/4pxw6T4/carousel-03.jpg"
          className="w-full"
        />
        <div className="quote-overlay absolute inset-0 flex flex-col items-center justify-center">
          <p className="w-8/12 pacifico text-white text-center text-2xl p-4 rounded">
            20% Discount on Brazil's Latest Sleeveless T-Shirt!
          </p>
          <button className="btn nunito bg-primary border-none text-white text-lg hover:text-black">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/3hQBdv2/carousel-04.jpg"
          className="w-full"
        />
        <div className="quote-overlay absolute inset-0 flex flex-col items-center justify-center">
          <p className="w-8/12 pacifico text-center text-white text-2xl p-4 rounded">
            15% Discount on Argentina's Latest Sleeveless T-Shirt!
          </p>
          <button className="btn nunito bg-primary border-none text-white text-lg hover:text-black">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

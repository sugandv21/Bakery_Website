import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner3.jpeg";
import banner3 from "../assets/images/banner2.jpeg";
import banner4 from "../assets/images/banner4.jpg";

import arrow1 from "../assets/images/arrow2.png";
import arrow2 from "../assets/images/arrow1.png";
import arrow3 from "../assets/images/arrow3.png";
import arrow4 from "../assets/images/arrow4.png";

const banners = [
  {
    title: "Baked with Love, Served with Joy",
      subtitle: "Freshly baked breads, cakes, and pastries made daily with the finest ingredients",
    bannerImg: banner1,
    arrowImg: arrow1,
    textClass: "text-gray-900",
  },
  {
    title: "Crafting Artisan Bakes Since 2012",
     subtitle: "Freshly baked breads, cakes, and pastries made daily with the fineExperience the rich tradition of baking with every bite.st ingredients",
    bannerImg: banner2,
    arrowImg: arrow2,
    textClass: "text-white",
  },
  {
    title: "Your Neighborhood Bakery",
    subtitle: "From oven to your table – fresh, warm, and delicious.",
    bannerImg: banner3,
    arrowImg: arrow3,
    textClass: "text-gray-900",
  },
  {
    title: "Fresh. Local. Handmade.",
    subtitle: "We bake daily so you can enjoy real flavor, every time.",
    bannerImg: banner4,
    arrowImg: arrow4,
    textClass: "text-gray-900",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.bannerImg}
            alt={banner.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-5 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px]">
            <img
              src={banner.arrowImg}
              alt="arrow shape"
              className="w-full h-auto brightness-110 opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center text-center px-4">
              <h2
                className={`text-lg md:text-xl lg:text-3xl font-bold mt-14`}
              >
                {banner.title}
              </h2>
              <p
                className={`my-5 px-10 text-xs sm:text-sm md:text-lg font-semibold ${banner.textClass}`}
              >
                {banner.subtitle}
              </p>
            <Link to="/products">
  <button className="mt-4 px-5 py-2 bg-[#F4d03c] hover:bg-yellow-500 font-semibold text-black rounded-full">
    EXPLORE NOW
  </button>
</Link>
            </div>
          </div>
        </div>
      ))}

      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
      >
        <FaChevronRight size={20} />
      </button> */}
    </div>
  );
};

export default BannerSlider;

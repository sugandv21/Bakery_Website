import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { bread } from "../data/breadData";
import { useWishlist } from "../context/WishlistContext";

const Muesli = () => {
  const { wishlist, addToWishlist } = useWishlist();
    useEffect(() => {
      document.title = "CHERRI | PRODUCT-MUESLI";  
    }, []);

  return (
    <section className="mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#E57F35] mb-10">
          MUESLI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {bread.map((product) => {
            const inWishlist = wishlist.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="relative bg-white rounded-xl overflow-hidden shadow-md group flex flex-col"
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToWishlist(product);
                  }}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md border border-gray-300 hover:bg-[#D99A6C] hover:text-white transition-colors cursor-pointer z-10"
                >
                  <FaHeart
                    className={`transition-colors duration-200 ${
                      inWishlist ? "text-red-500" : "text-gray-600"
                    }`}
                  />
                </div>

                <Link to={`/product/${product.id}`} className="flex-1">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </Link>

                <div className="p-4 bg-[#F3E5AB] text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl  font-bold text-gray-800 uppercase">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-gray-700">
                    FROM: ₹ {product.price} PER KG
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Muesli;

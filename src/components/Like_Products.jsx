import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { bread } from "../data/breadData";
import { savories } from "../data/savoriesData";
import { rusk } from "../data/ruskData";
import { cake } from "../data/cakeData";
import { sweet } from "../data/sweetData";
import { cookies } from "../data/cookiesData";
import { pastries } from "../data/pastriesData";
import { giftbox } from "../data/giftboxData";
import { chocolate } from "../data/chocolateData";
import { chips } from "../data/chipsData";
import { creamRoll } from "../data/creamRollData";
import { muffins } from "../data/muffinsData";

const Like_Products = ({ currentProduct }) => {
  const { wishlist, addToWishlist } = useWishlist();

  if (!currentProduct) return null;

  let dataset = [];
  if (savories.some((p) => p.id === currentProduct.id)) {
    dataset = savories;
  } else if (rusk.some((p) => p.id === currentProduct.id)) {
    dataset = rusk;
  } else if (cake.some((p) => p.id === currentProduct.id)) {
    dataset = cake;
  } else if (sweet.some((p) => p.id === currentProduct.id)) {
    dataset = sweet;
  } else if (cookies.some((p) => p.id === currentProduct.id)) {
    dataset = cookies;
  } else if (pastries.some((p) => p.id === currentProduct.id)) {
    dataset = pastries;
  } else if (giftbox.some((p) => p.id === currentProduct.id)) {
    dataset = giftbox;
  } else if (chocolate.some((p) => p.id === currentProduct.id)) {
    dataset = chocolate;
  } else if (bread.some((p) => p.id === currentProduct.id)) {
    dataset = bread;
  } else if (chips.some((p) => p.id === currentProduct.id)) {
    dataset = chips;
  } else if (creamRoll.some((p) => p.id === currentProduct.id)) {
    dataset = creamRoll;
  } else if (muffins.some((p) => p.id === currentProduct.id)) {
    dataset = muffins;
  }

  const similarProducts = dataset
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 3);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#E57F35] mb-10">
          YOU MAY ALSO LIKE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {similarProducts.map((product) => {
            const inWishlist = wishlist.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="relative bg-white rounded-xl overflow-hidden shadow-md group w-full max-w-sm mx-auto"
              >
                {/* Wishlist Button */}
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

                <Link to={`/product/${product.id}`} className="block relative">
                  <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 w-full bg-[#F3E5AB] py-3 px-2 sm:px-4 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase break-words">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
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

export default Like_Products;

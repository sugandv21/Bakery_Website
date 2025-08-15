import React from "react";
import { Link } from "react-router-dom";
import cakeImg from "../assets/images/cakes.jpg";
import pastryImg from "../assets/images/pastries.png";
import sweetsImg from "../assets/images/sweets.jpg";
import giftboxImg from "../assets/images/giftbox.jpg";
import sevoriesImg from "../assets/images/sevories.jpg";
import breadsImg from "../assets/images/breads.jpg";
import cookiesImg from "../assets/images/cookies1.jpg";
import creamrollImg from "../assets/images/creamroll.jpg";
import muffinsImg from "../assets/images/muffins.jpg";
import chipsImg from "../assets/images/chips.jpg";
import chocolatesImg from "../assets/images/chocolates.jpg";
import ruskImg from "../assets/images/rusk.png";

export const products = [
  { img: cakeImg, title: "CAKES", types: "20 TYPES", link: "/cakes" },
  { img: pastryImg, title: "PASTRIES", types: "12 TYPES", link: "/pastries" },
  { img: sweetsImg, title: "SWEETS", types: "25 TYPES", link: "/sweets" },
  { img: giftboxImg, title: "GIFT BOX", types: "10 TYPES", link: "/giftbox" },
  { img: sevoriesImg, title: "SEVORIES", types: "34 TYPES", link: "/sevories" },
  { img: breadsImg, title: "BREADS", types: "14 TYPES", link: "/breads" },
  { img: cookiesImg, title: "COOKIES & BISCUITS", types: "19 TYPES", link: "/cookies" },
  { img: creamrollImg, title: "CREAM ROLL", types: "4 TYPES", link: "/creamroll" },
  { img: muffinsImg, title: "MUFFINS & FRUIT CAKE", types: "18 TYPES", link: "/muffins" },
  { img: chipsImg, title: "CHIPS", types: "5 TYPES", link: "/chips" },
  { img: chocolatesImg, title: "CHOCHOLATES", types: "10 TYPES", link: "/chocolates" },
  { img: ruskImg, title: "RUSK", types: "7 TYPES", link: "/rusk" },
];


const ProductsSection = () => {
  return (
    <section className="mt-28 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#E57F35] mb-10">
          OUR PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
               <Link to={product.link}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-82 object-cover transform group-hover:scale-105 transition duration-300 cursor-pointer"
                />
              </Link>
              {/* Overlay */}
              {/* <div className="absolute bottom-0 w-full bg-[#F3E5AB]/90 text-center py-3">
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-sm">{product.types}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

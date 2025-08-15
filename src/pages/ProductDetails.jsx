import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import lockIcon from "../assets/images/pay.png";
import timerIcon from "../assets/images/24hour.png";
import vegIcon from "../assets/images/vege.png";
import Like_Products from "../components/Like_Products";
import { savories } from "../data/savoriesData";
import { rusk } from "../data/ruskData";
import { cake } from "../data/cakeData";
import { cookies } from "../data/cookiesData";
import { pastries } from "../data/pastriesData";
import { sweet } from "../data/sweetData";
import { bread } from "../data/breadData";
import { giftbox } from "../data/giftboxData";
import { chocolate } from "../data/chocolateData";
import { useCart } from "../context/CartContext";
import { chips } from "../data/chipsData";
import { creamRoll } from "../data/creamRollData";
import { muffins } from "../data/muffinsData";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { id } = useParams();

  const products = [
    ...savories,
    ...rusk,
    ...cake,
    ...sweet,
    ...cookies,
    ...pastries,
    ...giftbox,
    ...chocolate,
    ...bread,
    ...chips,
    ...creamRoll,
    ...muffins,
  ];
  const product = products.find((p) => String(p.id) === id);

  const [selectedWeight, setSelectedWeight] = useState("500 G");
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  const weights = ["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"];

  const category =
    product.category ||
    (savories.includes(product)
      ? "SAVORIES"
      : rusk.includes(product)
      ? "RUSK"
      : cake.includes(product)
      ? "CAKE"
      : sweet.includes(product)
      ? "SWEET"
      : cookies.includes(product)
      ? "COOKIES"
      : pastries.includes(product)
      ? "PASTRIES"
      : giftbox.includes(product)
      ? "GIFT BOX"
      : chocolate.includes(product)
      ? "CHOCOLATES"
      : bread.includes(product)
      ? "BREAD"
      : chips.includes(product)
      ? "CHIPS"
      : creamRoll.includes(product)
      ? "CREAM ROLL"
      : muffins.includes(product)
      ? "MUFFINS"
      : "UNKNOWN");

  return (
    <section className="mt-28 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={product.img}
            alt={product.title}
            className="rounded-lg w-full shadow-md mb-6"
          />

          <div className="flex flex-col gap-3 text-sm mb-6">
            <div className="mb-4">
              <p className="font-semibold mb-2 text-lg">ENTER YOUR PINCODE*</p>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
                className="border border-gray-300 rounded w-full px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-4 text-base md:text-md">
              <div className="w-12 h-12 rounded-full bg-[#d99a6c] flex items-center justify-center">
                <img
                  src={lockIcon}
                  alt="Secure Payment"
                  className="w-10 h-10"
                />
              </div>
              <span>100% secure payment</span>
            </div>

            <div className="flex items-center gap-4 text-base md:text-md mt-2">
              <div className="w-12 h-12 rounded-full bg-[#d99a6c] flex items-center justify-center">
                <img
                  src={timerIcon}
                  alt="Preparation Time"
                  className="w-10 h-10"
                />
              </div>
              <span>24 hour preparation time</span>
            </div>

            <div className="flex items-center gap-4 text-base md:text-md mt-2">
              <div className="w-12 h-12 rounded-full bg-[#d99a6c] flex items-center justify-center">
                <img src={vegIcon} alt="Vegetarian" className="w-10 h-10" />
              </div>
              <span>100% vegetarian</span>
            </div>

            <p className="text-xs text-gray-600">
              ** Note that all orders will be dispatched after 24 hours **
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-600 font-bold mb-1">Cherii Bakery</p>
          <h2 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold text-[#e57f35] mb-3">
            {product.title}
          </h2>

          <p className="text-gray-700 mb-4 font-bold leading-relaxed text-md md:text-md lg:text-xl">
            {product.description}
          </p>

          <p className="text-md md:text-md lg:text-xl font-bold text-gray-800 mb-2">
            ₹ {product.price}
          </p>
          <p className="uppercase text-sm text-gray-500 mb-4">
            Incl. of all taxes
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">WEIGHT:</p>
            <div className="flex flex-wrap gap-2">
              {weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    selectedWeight === w
                      ? "bg-[#f4d03c] border-[#f4d03c]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">QUANTITY:</p>
            <div className="flex items-center border rounded w-28">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <button
              className="bg-[#f4d03c] text-black px-6 py-2 rounded shadow hover:bg-yellow-500 transition"
              onClick={() => {
                addToCart({
                  ...product,
                  selectedWeight,
                  quantity,
                  category,
                });
              }}
            >
              ADD TO CART
            </button>

            <button
              className="bg-[#f4d03c] text-black px-6 py-2 rounded shadow hover:bg-yellow-500 transition"
              onClick={() => {
                navigate("/payment", {
                  state: {
                    product,
                    selectedWeight,
                    quantity,
                    pincode,
                    unitPrice: product.price,
                    category,
                  },
                });
              }}
            >
              BUY NOW
            </button>
          </div>
          <div className="space-y-3">
            {product.nutrition && (
              <div className="border p-3 rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold text-xl md:text-2xl">
                  Nutrition:
                </h4>
                <p className="ms-10 text-sm md:text-md leading-tight text-gray-600">
                  {product.nutrition}
                </p>
              </div>
            )}
            {product.ingredients && (
              <div className="border p-3 rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold text-xl md:text-2xl">
                  Ingredients:
                </h4>
                <p className="ms-10 text-sm md:text-md leading-tight text-gray-600">
                  {product.ingredients}
                </p>
              </div>
            )}
            {product.allergies && (
              <div className="border p-3 rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold text-xl md:text-2xl">
                  Allergies:
                </h4>
                <p className="ms-10 text-sm md:text-md leading-tight text-gray-600">
                  {product.allergies}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Like_Products currentProduct={product} />
    </section>
  );
};

export default ProductDetails;

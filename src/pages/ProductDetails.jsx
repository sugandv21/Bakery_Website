import React, { useState, useEffect  } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
import { chips } from "../data/chipsData";
import { creamRoll } from "../data/creamRollData";
import { muffins } from "../data/muffinsData";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
    useEffect(() => {
      document.title = "CHERRI | PRODUCT DETAILS";  
    }, []);
  const navigate = useNavigate();
  const location = useLocation();
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

  const wishlistProducts = location.state?.cartItems;


  const singleProduct = id ? products.find((p) => String(p.id) === id) : null;

  const displayProducts = wishlistProducts || (singleProduct ? [singleProduct] : []);

  const weights = ["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"];

  const [productStates, setProductStates] = useState(() =>
    displayProducts.reduce((acc, p) => {
      acc[p.id] = {
        selectedWeight: "500 G",
        quantity: 1,
        pincode: "",
      };
      return acc;
    }, {})
  );

  const updateProductState = (productId, field, value) => {
    setProductStates((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      },
    }));
  };

  if (!displayProducts || displayProducts.length === 0) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  return (
    <section className="mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0] py-8 min-h-screen">
      {displayProducts.map((product) => {
        const { selectedWeight, quantity, pincode } = productStates[product.id] || {};

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
          <div
            key={product.id}
            className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          >
            {/* Left Side */}
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
                    onChange={(e) =>
                      updateProductState(product.id, "pincode", e.target.value)
                    }
                    placeholder="Enter pincode"
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-4 text-base md:text-md">
                  <div className="w-12 h-12 rounded-full bg-[#d99a6c] flex items-center justify-center">
                    <img src={lockIcon} alt="Secure Payment" className="w-10 h-10" />
                  </div>
                  <span>100% secure payment</span>
                </div>

                <div className="flex items-center gap-4 text-base md:text-md mt-2">
                  <div className="w-12 h-12 rounded-full bg-[#d99a6c] flex items-center justify-center">
                    <img src={timerIcon} alt="Preparation Time" className="w-10 h-10" />
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

            {/* Right Side */}
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

              {/* Weight */}
              <div className="mb-4">
                <p className="font-semibold mb-2">WEIGHT:</p>
                <div className="flex flex-wrap gap-2">
                  {weights.map((w) => (
                    <button
                      key={w}
                      onClick={() => updateProductState(product.id, "selectedWeight", w)}
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

              {/* Quantity */}
              <div className="mb-4">
                <p className="font-semibold mb-2">QUANTITY:</p>
                <div className="flex items-center border rounded w-28">
                  <button
                    onClick={() =>
                      updateProductState(product.id, "quantity", Math.max(1, quantity - 1))
                    }
                    className="px-3 py-1"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button
                    onClick={() =>
                      updateProductState(product.id, "quantity", quantity + 1)
                    }
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  className="bg-[#f4d03c] text-black px-6 py-2 rounded shadow hover:bg-yellow-500 transition"
                  onClick={() =>
                    addToCart({
                      ...product,
                      selectedWeight,
                      quantity,
                      category,
                    })
                  }
                >
                  ADD TO CART
                </button>

                <button
                  className="bg-[#f4d03c] text-black px-6 py-2 rounded shadow hover:bg-yellow-500 transition"
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        cartItems: [
                          {
                            ...product,
                            category,
                            quantity,
                            selectedWeight,
                            pincode,
                            unitPrice: product.price,
                          },
                        ],
                      },
                    })
                  }
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Like Products */}
      {singleProduct && <Like_Products currentProduct={singleProduct} />}
    </section>
  );
};

export default ProductDetails;

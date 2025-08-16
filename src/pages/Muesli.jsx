import React, { useState,  useEffect } from "react";
import { Link } from "react-router-dom";

import muesli1 from "../assets/images/muesli1.jpeg";
import muesli2 from "../assets/images/muesli2.webp";
import muesli3 from "../assets/images/muesli3.png";
import muesli4 from "../assets/images/muesli4.jpeg";

const muesliItems = [
  {
    id: "m1",
    name: "Classic Fruit Muesli",
    category: "Muesli",
    priceFrom: 250,
    unit: "500g pack",
    availableInStore: true,
    desc:
      "A wholesome blend of oats, dried fruits, and nuts for a nourishing breakfast.",
    more:
      "Classic Fruit Muesli is packed with rolled oats, almonds, raisins, and dried fruits that provide a natural sweetness. High in fiber and protein, it’s a healthy start to your day, enjoyed with milk, yogurt, or as a snack on its own.",
    image: muesli1,
  },
  {
    id: "m2",
    name: "Chocolate Muesli",
    category: "Muesli",
    priceFrom: 280,
    unit: "500g pack",
    availableInStore: true,
    desc:
      "Crunchy oats with cocoa, dark chocolate chunks, and roasted nuts for a delicious twist.",
    more:
      "Chocolate Muesli combines wholesome grains with indulgent cocoa and dark chocolate chunks. Perfect for chocolate lovers, it offers a rich flavor while still being a healthy breakfast option.",
    image: muesli2,
  },
  {
    id: "m3",
    name: "Nutty Delight Muesli",
    category: "Muesli",
    priceFrom: 300,
    unit: "500g pack",
    availableInStore: true,
    desc:
      "Loaded with almonds, cashews, walnuts, and seeds for a protein-packed meal.",
    more:
      "Nutty Delight Muesli is the perfect option for nut lovers. It’s enriched with almonds, cashews, walnuts, sunflower seeds, and pumpkin seeds, offering crunch, flavor, and plenty of nutrients in every bite.",
    image: muesli3,
  },
  {
    id: "m4",
    name: "Berry Blast Muesli",
    category: "Muesli",
    priceFrom: 320,
    unit: "500g pack",
    availableInStore: true,
    desc:
      "A tangy-sweet blend of cranberries, strawberries, blueberries, and oats.",
    more:
      "Berry Blast Muesli combines rolled oats with an assortment of dried berries like cranberries, strawberries, and blueberries. It’s antioxidant-rich and makes a refreshing, fruity breakfast or snack.",
    image: muesli4,
  },
];

export default function Muesli() {
    useEffect(() => {
      document.title = "CHERRI | PRODUCT-MUESLI";  
    }, []);
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0]">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Premium Muesli – Available in Store
          </h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            Explore our range of healthy and delicious muesli blends. All items
            on this page are available in our shop.
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 rounded-lg bg-white/90 text-[#6B3E2E] px-5 py-2 font-medium shadow hover:bg-white"
          >
            Shop & Order More Products
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {muesliItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="w-full text-left">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.availableInStore && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Available in Store
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wide">
                        {item.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">FROM</p>
                      <p className="text-xl font-bold text-neutral-900">
                        ₹{item.priceFrom}
                        <span className="ml-1 align-middle text-xs font-medium text-neutral-500">
                          / {item.unit}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="mt-2 text-sm font-medium text-[#6B3E2E] underline decoration-dotted underline-offset-4 hover:opacity-80"
                  >
                    {expanded === item.id ? "View Less" : "View More"}
                  </button>

                  {expanded === item.id && (
                    <p className="mt-3 text-sm text-neutral-700">
                      {item.more}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-block rounded-lg bg-[#D99A6C] text-white px-6 py-3 font-medium shadow hover:bg-[#b97e55]"
          >
            Click to Shop & Explore More Products
          </Link>
        </div>
      </main>
    </div>
  );
}

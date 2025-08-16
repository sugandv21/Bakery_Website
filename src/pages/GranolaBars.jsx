import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bar1 from "../assets/images/bar1.webp";
import bar2 from "../assets/images/bar2.jpg";
import bar3 from "../assets/images/bar3.webp";
import bar4 from "../assets/images/bar4.jpg";

const granolaItems = [
  {
    id: "g1",
    name: "Classic Honey Granola Bar",
    category: "Granola Bar",
    priceFrom: 120,
    unit: "per pack",
    availableInStore: true,
    desc: "Crunchy oats mixed with honey and nuts.",
    more: "Our Classic Honey Granola Bar is baked with wholesome rolled oats, golden honey, almonds, and seeds. A perfect natural snack full of energy and taste.",
    image: bar1,
  },
  {
    id: "g2",
    name: "Chocolate Granola Bar",
    category: "Granola Bar",
    priceFrom: 140,
    unit: "per pack",
    availableInStore: true,
    desc: "Granola bar blended with rich dark chocolate.",
    more: "Indulge in our Chocolate Granola Bar crafted with roasted oats, cocoa, nuts, and dark chocolate chips. A guilt-free way to satisfy sweet cravings.",
    image: bar2,
  },
  {
    id: "g3",
    name: "Fruit & Nut Granola Bar",
    category: "Granola Bar",
    priceFrom: 150,
    unit: "per pack",
    availableInStore: true,
    desc: "Loaded with dried fruits and crunchy nuts.",
    more: "A delightful mix of raisins, cranberries, cashews, almonds, and oats pressed together with honey. Nutritious, filling, and tasty.",
    image: bar3,
  },
  {
    id: "g4",
    name: "Protein Granola Bar",
    category: "Granola Bar",
    priceFrom: 160,
    unit: "per pack",
    availableInStore: true,
    desc: "High-protein granola bar with seeds and nuts.",
    more: "Boost your day with our Protein Granola Bar, made with soy protein, pumpkin seeds, chia seeds, and almonds. Packed with nutrients and flavor.",
    image: bar4,
  },
];

export default function GranolaBars() {
  useEffect(() => {
    document.title = "CHERRI | PRODUCT - GRANOLA BARS";
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
            Healthy Granola Bars – Available in Store
          </h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            Nutritious and delicious granola bars crafted with oats, nuts, and
            natural sweetness. Perfect for snacks and energy boosts.
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
          {granolaItems.map((item) => (
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
                    aria-expanded={expanded === item.id}
                    className="mt-2 text-sm font-medium text-[#6B3E2E] underline decoration-dotted underline-offset-4 hover:opacity-80"
                  >
                    {expanded === item.id ? "View Less" : "View More"}
                  </button>

                  {expanded === item.id && (
                    <p className="mt-3 text-sm text-neutral-700 transition-all duration-300 ease-in-out">
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

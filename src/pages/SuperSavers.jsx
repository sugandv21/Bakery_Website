import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import saver1 from "../assets/images/pack4.webp";
import saver2 from "../assets/images/pack3.webp";
import saver3 from "../assets/images/pack2.jpg";
import saver4 from "../assets/images/pack1.webp";

const superSaverItems = [
  {
    id: "ss1",
    name: "Breakfast Saver Pack",
    category: "Bakery Super Saver",
    priceFrom: 199,
    unit: "per combo",
    availableInStore: true,
    desc: "Includes bread loaf, butter croissant & muffins.",
    more: "Our Breakfast Saver Pack is perfect for families. Get a fresh bread loaf, 2 buttery croissants, and 4 soft muffins – wholesome and affordable.",
    image: saver1,
  },
  {
    id: "ss2",
    name: "Evening Snack Saver",
    category: "Bakery Super Saver",
    priceFrom: 249,
    unit: "per combo",
    availableInStore: true,
    desc: "Combo of garlic bread, cookies & rolls.",
    more: "The Evening Snack Saver is a perfect mix for tea-time: Garlic bread loaf, 200g cookies, and 4 soft bread rolls – tasty and value-packed.",
    image: saver2,
  },
  {
    id: "ss3",
    name: "Healthy Saver Pack",
    category: "Bakery Super Saver",
    priceFrom: 299,
    unit: "per combo",
    availableInStore: true,
    desc: "Whole wheat bread, multigrain loaf, & seed bun pack.",
    more: "For the health-conscious: A whole wheat bread, one multigrain loaf, and 6 seed buns. Nutritious, fresh, and affordable.",
    image: saver3,
  },
  {
    id: "ss4",
    name: "Family Party Saver",
    category: "Bakery Super Saver",
    priceFrom: 399,
    unit: "per combo",
    availableInStore: true,
    desc: "Cakes, pastries & assorted donuts in one pack.",
    more: "Celebrate with our Family Party Saver Pack – includes 1 half kg cake, 2 pastries, and 4 assorted donuts. Perfect for parties and gatherings.",
    image: saver4,
  },
];

export default function SuperSavers() {
  useEffect(() => {
    document.title = "CHERRI | SUPER SAVERS - BAKERY";
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
            Super Savers – Bakery Specials
          </h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            Save more with our specially curated bakery saver packs. Perfect for
            breakfast, evening snacks, and family celebrations.
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
          {superSaverItems.map((item) => (
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

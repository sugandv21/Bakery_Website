import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import seed1 from "../assets/images/seedmix1.jpg";
import seed2 from "../assets/images/seedmix2.webp";
import seed3 from "../assets/images/seedmix3.webp";
import seed4 from "../assets/images/seedmix4.jpg";

const seedMixItems = [
  {
    id: "s1",
    name: "Omega Seed Mix",
    category: "Seed Mix",
    priceFrom: 180,
    unit: "per pack",
    availableInStore: true,
    desc: "A power-packed mix of flax, chia, and pumpkin seeds.",
    more: "Our Omega Seed Mix is a nutrient-dense blend of flax seeds, chia seeds, pumpkin seeds, and sunflower seeds. Rich in omega-3 fatty acids and antioxidants, it supports heart health and overall wellness.",
    image: seed1,
  },
  {
    id: "s2",
    name: "Protein Seed Mix",
    category: "Seed Mix",
    priceFrom: 200,
    unit: "per pack",
    availableInStore: true,
    desc: "High-protein seed mix with hemp, sunflower, and flax.",
    more: "Boost your daily protein intake with our Protein Seed Mix. A wholesome mix of hemp seeds, flax seeds, and sunflower seeds that fuels your body with natural plant-based protein.",
    image: seed2,
  },
  {
    id: "s3",
    name: "Superfood Seed Mix",
    category: "Seed Mix",
    priceFrom: 220,
    unit: "per pack",
    availableInStore: true,
    desc: "Nutrient-rich blend of chia, flax, and sesame seeds.",
    more: "Our Superfood Seed Mix combines the power of chia, flax, sesame, and pumpkin seeds. Packed with fiber, minerals, and antioxidants, this mix is perfect for smoothies, salads, or snacking.",
    image: seed3,
  },
  {
    id: "s4",
    name: "Roasted Seed Mix",
    category: "Seed Mix",
    priceFrom: 190,
    unit: "per pack",
    availableInStore: true,
    desc: "Crunchy roasted seeds seasoned with natural spices.",
    more: "A tasty and healthy snack! Our Roasted Seed Mix is made with roasted pumpkin, sunflower, and flax seeds, lightly seasoned with natural spices for a crunchy, savory treat.",
    image: seed4,
  },
];

export default function SeedMixes() {
  useEffect(() => {
    document.title = "CHERRI | PRODUCT - SEED MIXES";
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
            Wholesome Seed Mixes – Available in Store
          </h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            Healthy and crunchy seed mixes packed with nutrition. Perfect for
            snacking or adding to your daily meals.
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
          {seedMixItems.map((item) => (
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

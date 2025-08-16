import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import paniPuri from "../assets/images/chat1.png";
import masalaPuri from "../assets/images/chat2.webp";
import sevPuri from "../assets/images/chat3.jpeg";
import dahiPuri from "../assets/images/chat4.avif";

const chatItems = [
  {
    id: "c1",
    name: "Pani Puri",
    category: "Chat",
    priceFrom: 50,
    unit: "per plate",
    availableInStore: true,
    desc: "Crispy puris filled with spicy tangy water and chutneys.",
    more: "Pani Puri, also known as Golgappa, is a favorite Indian street food. Each crispy puri is filled with spiced mashed potatoes, chickpeas, and tangy tamarind water for an irresistible flavor burst.",
    image: paniPuri,
  },
  {
    id: "c2",
    name: "Masala Puri",
    category: "Chat",
    priceFrom: 60,
    unit: "per plate",
    availableInStore: true,
    desc: "Warm puris topped with spicy masala, peas, and chutneys.",
    more: "Masala Puri is a famous chat made with crushed puris, spicy masala gravy, boiled peas, onions, and fresh coriander leaves. A mouthwatering combination of flavors and textures.",
    image: masalaPuri,
  },
  {
    id: "c3",
    name: "Sev Puri",
    category: "Chat",
    priceFrom: 70,
    unit: "per plate",
    availableInStore: true,
    desc: "Flat puris topped with chutneys, potatoes, onions, and sev.",
    more: "Sev Puri is a crunchy and tangy chat prepared with flat puris layered with boiled potatoes, chopped onions, chutneys, and finished with crispy sev for extra crunch.",
    image: sevPuri,
  },
  {
    id: "c4",
    name: "Dahi Puri",
    category: "Chat",
    priceFrom: 80,
    unit: "per plate",
    availableInStore: true,
    desc: "Crispy puris filled with curd, chutneys, and masala.",
    more: "Dahi Puri is a refreshing variation of pani puri, filled with yogurt, spicy and sweet chutneys, mashed potatoes, and topped with sev. Perfect balance of sweet, tangy, and spicy flavors.",
    image: dahiPuri,
  },
];

export default function Chat() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0]">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Street-Style Chats – Available in Store
          </h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            Relish the authentic taste of India with our freshly prepared chat items. 
            All items are available in our shop.
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
          {chatItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
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

                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-sm text-neutral-700"
                      >
                        {item.more}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.article>
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

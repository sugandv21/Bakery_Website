import React from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";

const WhyChooseUs = () => {
  const cards = [card1, card2, card3, card4, card5];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#e57f35] mb-8">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-gray-300 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Card ${index + 1}`}
              className="w-[150px] sm:w-[450px] h-auto max-h-[200px] sm:max-h-[450px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;



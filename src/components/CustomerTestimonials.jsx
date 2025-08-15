import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../assets/images/user1.png";
import img2 from "../assets/images/user2.png";
import arrowIcon from "../assets/images/arrow.png";

const CustomerTestimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      image: img1,
      text: `"A hidden gem with real passion behind every bake."
“You can taste the quality in every bite. It’s clear they care deeply about their craft.”`,
      author: "— Daniel K., Chef & Culinary Enthusiast",
    },
    {
      image: img2,
      text: `"The kids love the cookies—and so do I!"
“We stop by after school for their chocolate chip cookies. Soft, gooey, and always fresh.”`,
      author: "— Lena W., Mom of Two",
    },
  ];

  const handleArrowClick = () => {
    navigate("/testimonial", { state: { testimonials } });
  };

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#E6772E] mb-10 uppercase tracking-wide animate-fadeIn">
        Our Customers Love
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto relative">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-8 flex flex-col items-center text-center border border-gray-200 
                       w-full max-w-[400px] mx-auto hover:scale-[1.02] transform duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 overflow-hidden border-2 border-[#E6772E] animate-bounce-slow">
              <img
                src={item.image}
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-black text-sm md:text-2xl leading-tight font-medium opacity-90">
              {item.text}
            </p>

            <p className="text-black text-sm md:text-2xl leading-tight font-medium opacity-90 mt-1">
              {item.author}
            </p>
          </div>
        ))}

        {/* Single arrow on the right */}
        <div
          onClick={handleArrowClick}
          className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 cursor-pointer"
        >
          <img
            src={arrowIcon}
            alt="arrow"
            className="w-4 h-6 scale-x-[8] animate-slideRight hover:translate-x-2 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Call to action with arrow (optional) */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
        <p className="text-base md:text-lg lg:text-3xl font-bold">
          Direct visits chat item available
        </p>

        <Link to="/chat">
  <div className="flex flex-col items-center p-4 group cursor-pointer">
    <img
      src={arrowIcon}
      alt="arrow"
      className="lg:ms-16 w-4 h-6 scale-x-[8] transition-transform duration-300 group-hover:translate-x-2"
    />
    <span className="text-base font-medium transition-colors duration-300 group-hover:text-[#E6772E] lg:ms-10">
      see menu
    </span>
  </div>
</Link>
      </div>
    </div>
  );
};

export default CustomerTestimonials;

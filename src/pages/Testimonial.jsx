import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img3 from "../assets/images/user1.png";
import img4 from "../assets/images/user2.png";

const TestimonialPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { testimonials } = location.state || [];

  const extraTestimonials = [
    { image: img3, text: `"Absolutely amazing! The pastries are always fresh and delightful."`, author: "— Mark T., Food Blogger" },
    { image: img4, text: `"Friendly staff and cozy atmosphere. Perfect place for a weekend treat."`, author: "— Sarah P., Local Resident" },
  ];

  const allTestimonials = testimonials ? [...testimonials, ...extraTestimonials] : extraTestimonials;

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert(`Thank you, ${reviewName}! Your review: "${reviewText}" with rating ${reviewRating} has been received.`);
    setReviewName("");
    setReviewText("");
    setReviewRating(5);
    setShowModal(false);
  };

  return (
    <div className="mt-28 py-12 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
  
      <button onClick={() => navigate(-1)} className="mb-6 text-[#E6772E] font-bold hover:underline">
        ← Back to Home
      </button>


      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#E6772E] mb-4 uppercase tracking-wide">
        What Our Customers Say
      </h2>


      <p className="text-center text-base sm:text-lg text-gray-700 mb-8">
        At our bakery, every treat is made with love, care, and the finest ingredients. We’re grateful for our customers who share their experiences and inspire us to bake even better every day.
      </p>

      
      <div className="bg-[#FFE6D5] rounded-xl p-6 sm:p-8 mb-12 text-center shadow-lg">
        <p className="text-lg md:text-2xl font-semibold text-[#E6772E] italic mb-2">
          "The chocolate chip cookies here are simply unbeatable. My kids can't get enough!"
        </p>
        <p className="text-black font-medium">— Anna L., Happy Mom</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {allTestimonials.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 overflow-hidden border-2 border-[#E6772E]">
              <img src={item.image} alt="Customer" className="w-full h-full object-cover" />
            </div>
            <p className="text-black text-sm md:text-lg leading-relaxed font-medium opacity-90 mb-2">{item.text}</p>
            <p className="text-black text-sm md:text-lg font-semibold opacity-80">{item.author}</p>
          </div>
        ))}
      </div>


      <div className="mt-12 text-center">
        <p className="text-gray-700 text-base sm:text-lg mb-4">
          Loved our treats? Share your experience with us!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#E6772E] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d35e1b] transition-colors duration-300"
        >
          Leave a Review
        </button>
      </div>

 
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)} 
        >
          <div
            className="bg-white rounded-xl p-8 w-11/12 max-w-md relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#E6772E] mb-4">Leave a Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#E6772E]"
              />
              <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#E6772E] resize-none"
              />
              <div className="flex items-center justify-between">
                <label className="font-medium">Rating:</label>
                <select
                  value={reviewRating}
                  onChange={(e) => setReviewRating(e.target.value)}
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-[#E6772E]"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-[#E6772E] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d35e1b] transition-colors duration-300 w-full"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialPage;

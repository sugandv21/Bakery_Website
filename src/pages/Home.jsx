import React, { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import CommonQuestions from "../components/CommonQuestions";
import bannerImage from "../assets/images/Frame 6.png"; 
import CustomerTestimonials from "../components/CustomerTestimonials";

function Home() {
   useEffect(() => {
      document.title = "CHERRI | HOME";  
    }, []);
  return (
    <div className="mt-24 md:mt-52 lg:mt-28 bg-[#FFF8F0] ">
      <BannerSlider />
      <WhyChooseUs />
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#e57f35] mb-8">
        OFFERS AND DEALS
      </h2>
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <CommonQuestions />
      <CustomerTestimonials />
    </div>
  );
}

export default Home;

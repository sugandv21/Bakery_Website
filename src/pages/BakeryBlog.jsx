import React, { useEffect } from "react";
import bread from "../assets/images/freshbakes.png";
import cake from "../assets/images/cakeblog.jpg";

const BakeryBlog = () => {
      useEffect(() => {
        document.title = "CHERRI | BLOG";  
      }, []);
    return (
        <main className=" text-[#0F0F0F] px-6 md:px-20 py-10 font-sans mt-20 md:mt-44 lg:mt-32 bg-[#FFF8F0]">
            <h1 className="text-center text-[20px] md:text-[36px] font-bold text-[#e57f35] mb-8">
                Welcome to Our Bakery Blog
            </h1>

           <div className="flex flex-col md:flex-row gap-0 items-center">

  <div className="w-full md:w-2/5 flex justify-center md:justify-start">
    <img
      src={bread}
      alt="Fresh Bread"
      className="rounded-lg shadow-lg w-96 h-96 object-cover"
    />
  </div>

  <div className="w-full md:w-3/5 text-center">
    <h2 className="text-[18px] md:text-[28px] font-semibold mb-4 leading-snug text-center">
      Fresh Bakes, Sweet Stories & Artisan Inspiration
    </h2>
    <p className="text-[15px] md:text-[20px] font-semibold leading-relaxed text-center">
      At Cherii Bakery, our passion for baking goes beyond the oven—it's a
      story we love to share. This blog is your go-to destination for
      everything sweet, savory, and lovingly handmade. Whether you're a
      fellow baker, a food lover, or just someone who enjoys the warmth of
      freshly baked bread, our blog i
</p>
</div>
</div>

            <div className="flex flex-col md:flex-row gap-10 mt-5 items-stretch">
                <div className="md:w-3/5">
                    <h2 className="text-[#e57f35] text-[18px] md:text-[28px] font-bold mb-8 mt-10">
                        What You’ll Find Here:
                    </h2>

                    <div className="space-y-7">
                        <div>
                            <h3 className="text-[#ce9d79] font-semibold text-[16px] md:text-[28px] mb-1">
                                Behind-the-Scenes Stories
                            </h3>
                            <p className="text-[14px] md:text-[20px] leading-relaxed">
                                Get a peek inside our kitchen, meet our talented bakers, and learn
                                what goes into creating your favorite pastries, cakes, and loaves.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#ce9d79] md:text-[28px] font-semibold text-[16px] mb-1">
                                Seasonal Specials & New Arrivals
                            </h3>
                            <p className="text-[14px] md:text-[20px] leading-relaxed">
                                Be the first to know about our latest menu additions, seasonal treats,
                                and limited-edition goodies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#ce9d79] md:text-[28px] font-semibold text-[16px] mb-1">
                                Recipes & Baking Tips
                            </h3>
                            <p className="text-[14px] md:text-[20px] leading-relaxed">
                                Try your hand at some of our favorite recipes and get expert tips to
                                help you bake like a pro at home.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#ce9d79] md:text-[28px] font-semibold text-[16px] mb-1">
                                Customer Spotlights & Events
                            </h3>
                            <p className="text-[14px] md:text-[20px] leading-relaxed">
                                We love our community! Read about our amazing customers, featured
                                events, and special moments shared in our bakery.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#ce9d79] md:text-[28px] font-semibold text-[16px] mb-1">
                                Sustainability & Ingredients
                            </h3>
                            <p className="text-[14px] md:text-[20px] leading-relaxed">
                                Learn more about the ingredients we use, our sourcing practices, and
                                how we’re working to bake better—for you and the planet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/5 flex items-stretch">
                    <img
                        src={cake}
                        alt="Blueberry Cake"
                        className="rounded-lg w-auto h-auto object-contain"
                    />
                </div>
            </div>


            <p className="mt-12 text-center text-[#744D31] text-[14px] md:text-[20px] font-medium max-w-4xl mx-auto leading-relaxed">
                Whether you're here for mouthwatering ideas or curious about what’s next
                in our oven, our blog is a delicious stop on your journey. Stay connected
                with us, leave a comment, and don’t forget to subscribe so you never miss
                a crumb!
            </p>
        </main>
    );
};

export default BakeryBlog;

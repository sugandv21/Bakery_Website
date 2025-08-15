import React from "react";
import macarons from "../assets/images/faq.jpg"; 
import designs from "../assets/images/faq1.png"; 

const CommonQuestions = () => {
  return (
    <section className="py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[#e57f35] font-bold text-lg md:text-3xl mb-8">
          COMMON QUESTION FOR CUSTOMERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-bold text-base md:text-2xl">
                1. What kind of content do you post on your blog?
              </h3>
              <p className="font-bold mt-2 text-sm md:text-xl">
                We share a variety of content including baking tips, behind-the-scenes stories from our bakery,
                seasonal updates, recipes, product highlights, and community events.
              </p>
            </div>
            <hr />
            <div>
              <h3 className="font-bold text-base md:text-2xl">
                2. How often do you update the blog?
              </h3>
              <p className="font-bold mt-2 text-sm md:text-xl">
                We aim to post new content at least once or twice a month. Check back regularly or subscribe to our newsletter for updates!
              </p>
            </div>
          <hr />
            <div>
              <h3 className="font-bold text-base md:text-2xl">
                3. Can I request a blog topic or recipe?
              </h3>
              <p className="font-bold mt-2 text-sm md:text-xl">
                Absolutely! We love hearing from our readers. If there’s a recipe or topic you’d like us to cover,
                feel free to contact us or leave a comment on a blog post.
              </p>
            </div>
          <hr />
            <div>
              <h3 className="font-bold text-base md:text-2xl">
                4. Are the recipes you share easy to follow for beginners?
              </h3>
              <p className="font-bold mt-2 text-sm md:text-xl">
                Yes! We include clear instructions, tips, and sometimes even step-by-step photos to help bakers of all levels enjoy the process.
              </p>
            </div>
          <hr />
            <div>
              <h3 className="font-bold text-base md:text-2xl">
                5. Do you feature guest posts or collaborations?
              </h3>
              <p className="font-bold mt-2 text-sm md:text-xl">
                We’re open to collaborating with local chefs, food bloggers, and other creatives.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={macarons}
              alt="Macarons"
              className="rounded-lg w-full max-w-[400px] object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center my-2">
          <img
            src={designs}
            alt="divider"
            className="w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;

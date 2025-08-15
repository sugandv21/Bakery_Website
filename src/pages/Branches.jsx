import React from "react";
import branch1 from "../assets/images/contact1.png";
import branch2 from "../assets/images/contact2.png";
import branch3 from "../assets/images/contact3.png";
import branch4 from "../assets/images/contact4.png";
import branch5 from "../assets/images/contact5.png";

const locations = [
  { city: "Chennai", addr: "No. 45, Anna Salai, T. Nagar, Chennai – 600017" },
  { city: "Coimbatore", addr: "12, DB Road, RS Puram, Coimbatore – 641002" },
  { city: "Madurai", addr: "28, KK Nagar Main Road, Madurai – 625020" },
  { city: "Tiruchirappalli (Trichy)", addr: "7, Salai Road, Thillai Nagar, Trichy – 620018" },
  { city: "Salem", addr: "15, Five Roads, Fairlands, Salem – 636016" },
  { city: "Tirunelveli", addr: "11, South Bypass Road, Palayamkottai, Tirunelveli – 627002" },
  { city: "Erode", addr: "9, Brough Road, Erode – 638001" },
  { city: "Vellore", addr: "14, Katpadi Road, Gandhi Nagar, Vellore – 632006" },
  { city: "Thoothukudi (Tuticorin)", addr: "6, Beach Road, Tuticorin – 628001" },
  { city: "Thanjavur", addr: "10, Medical College Road, Thanjavur – 613004" },
  { city: "Dindigul", addr: "4, GTN Road, Dindigul – 624005" },
  { city: "Kanchipuram", addr: "3, Ekambaranathar Sannathi Street, Kanchipuram – 631502" },
  { city: "Karur", addr: "22, Kovai Road, Karur – 639002" },
  { city: "Nagercoil", addr: "16, Cape Road, Vadasery, Nagercoil – 629001" },
  { city: "Cuddalore", addr: "8, Beach Road, Cuddalore – 607001" },
  { city: "Villupuram", addr: "19, Tindivanam Road, Villupuram – 605602" },
  { city: "Namakkal", addr: "5, Salem Road, Namakkal – 637001" },
  { city: "Tiruppur", addr: "20, Avinashi Road, Tiruppur – 641603" },
];

export default function Branches() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h2 className="text-center text-[#d3a23d] font-extrabold tracking-wide text-lg md:text-xl lg:text-2xl">
          OUR BRANCHES ACROSS TAMIL NADU
        </h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[640px] md:max-w-[720px] lg:w-full">
              <div className="relative w-full pt-[140%] md:pt-[120%] lg:pt-0 lg:h-[820px]">
      
                <img
                  src={branch1}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "75%",
                    top: "0%",
                    left: "0%",
                    transform: "rotate(-3deg)",
                  }}
                />
       
                <img
                  src={branch2}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl z-50"
                  style={{
                    width: "30%",
                    top: "40%",
                    left: "-6%",
                    transform: "rotate(9deg)",
                  }}
                />
       
                <img
                  src={branch3}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "82%",
                    top: "55%",
                    left: "12%",
                    transform: "rotate(3deg)",
                  }}
                />
     
                <img
                  src={branch4}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl z-50"
                  style={{
                    width: "28%",
                    top: "100%",
                    left: "70%",
                    transform: "rotate(-30deg)",
                  }}
                />

                <img
                  src={branch5}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "88%",
                    top: "115%",
                    left: "6%",
                    transform: "rotate(-4deg)",
                  }}
                />
              </div>
            </div>
          </div>


          <div className="lg:col-span-7">
            <div className="text-[13px] md:text-[15px] leading-relaxed text-neutral-800 space-y-4">
              {locations.map((l) => (
                <p key={l.city}>
                  <span className="font-semibold">{l.city}</span>
                  <br />
                  {l.addr}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

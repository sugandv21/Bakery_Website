import React, { useState, useEffect } from "react";
import contact1 from "../assets/images/contact.png";
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

const ContactUs = () => {
  useEffect(() => {
          document.title = "CHERRI | CONTACT US";  
        }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0] min-h-screen flex flex-col items-center py-10">
      <h2 className="text-[#e7833c] font-bold text-xl md:text-4xl uppercase text-center">
        Send Us a Message
      </h2>
      <p className="text-center mt-2 text-lg md:text-xl font-medium text-black px-4 sm:px-8">
        You can also use the form below to contact us directly. Our team will
        get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 max-w-5xl w-full px-4 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 order-2 md:order-1"
        >
          {["name", "email", "phone", "subject"].map((field, idx) => (
            <div key={idx}>
              <label className="block text-lg mb-3 font-semibold capitalize">
                {field}*
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full bg-[#F7F7F7] border border-gray-300 shadow-lg shadow-gray-600/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
          <div>
            <label className="block text-lg mb-3 font-semibold">Message*</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-5 bg-[#F7F7F7] border border-gray-300 shadow-lg shadow-gray-600/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#F4D03C] text-black font-bold py-2 rounded-2xl cursor-pointer hover:bg-yellow-500 transition"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
          <img
            src={contact1}
            alt="Contact"
            className="object-contain max-h-[350px] sm:max-h-[450px] md:max-h-[550px] w-full"
          />
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <h3 className="text-lg font-bold text-green-600">
              Message Sent Successfully!
            </h3>
            <p className="mt-2 text-gray-600">
              Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-[#F4D03C] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* LOCATIONS */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <h2 className="text-center text-[#f4d03c] font-extrabold tracking-wide text-lg md:text-xl lg:text-2xl">
          OUR BRANCHES ACROSS TAMIL NADU
        </h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[640px] lg:w-full">
              <div className="relative w-full pt-[140%] md:pt-[120%] lg:pt-0 lg:h-[820px]">
                <img
                  src={branch1}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "120%",
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
                    width: "40%",
                    top: "36%",
                    left: "-3%",
                    transform: "rotate(9deg)",
                  }}
                />
                <img
                  src={branch3}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "120%",
                    top: "50%",
                    left: "12%",
                    transform: "rotate(4deg)",
                  }}
                />
                <img
                  src={branch4}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl z-50"
                  style={{
                    width: "40%",
                    top: "90%",
                    left: "75%",
                    transform: "rotate(-20deg)",
                  }}
                />
                <img
                  src={branch5}
                  alt="Branch"
                  className="absolute rounded-lg shadow-xl"
                  style={{
                    width: "120%",
                    top: "105%",
                    left: "6%",
                    transform: "rotate(-5deg)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-800 space-y-4 lg:ms-20">
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
    </section>
  );
};

export default ContactUs;

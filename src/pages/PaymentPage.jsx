import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import defaultCakeImg from "../assets/images/cake_pay.jpg"; // fallback for product image
import pay1Img from "../assets/images/upi.png";
import pay2Img from "../assets/images/wallet.png";
import pay3Img from "../assets/images/credit-card.png";
import designs from "../assets/images/faq1.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const savedSelection = JSON.parse(localStorage.getItem("paymentSelection")) || {};
  const { selectedWeight: savedWeight, quantity: savedQty } = savedSelection;

  const { product, selectedWeight: initWeight, quantity: initQty, unitPrice, category } = state || {};

  const [quantity, setQuantity] = useState(savedQty || Number(initQty) || 1);
  const [weight, setWeight] = useState(savedWeight || initWeight || "500 G");
  const [pricePerKg] = useState(Number(unitPrice) || 0);
  const [discount] = useState(0.15);
  const [deliveryFee] = useState(40);
  const [gstRate] = useState(0.05);

  const [address, setAddress] = useState({
    name: "",
    location: "",
    mobile: "",
    notes: "",
    fullAddress: ""
  });

  const [addressAdded, setAddressAdded] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "paymentSelection",
      JSON.stringify({ selectedWeight: weight, quantity })
    );
  }, [weight, quantity]);

  const getWeightInKg = (w) => {
    if (!w) return 1;
    const lower = w.toLowerCase().trim();
    if (lower.endsWith("kg")) return parseFloat(lower.replace("kg", "").trim());
    if (lower.endsWith("g")) return parseFloat(lower.replace("g", "").trim()) / 1000;
    return 1;
  };

  const weightInKg = getWeightInKg(weight);
  const totalProductPrice = pricePerKg * weightInKg * quantity;
  const discountAmount = totalProductPrice * discount;
  const gstAmount = (totalProductPrice - discountAmount) * gstRate;
  const total = totalProductPrice - discountAmount + deliveryFee + gstAmount;

  const displayCategory = category
    ? category.toUpperCase()
    : product?.category?.toUpperCase() || "";

  const handleAddAddress = () => {
    const { name, location, mobile, fullAddress } = address;
    if (!name || !location || !mobile || !fullAddress) {
      alert("Please fill all required address fields");
      return;
    }
    localStorage.setItem("savedAddress", JSON.stringify(address));
    setAddressAdded(true);
    alert("Address added successfully!");
  };

  const handlePaymentSelect = (option) => {
    setSelectedPayment(option);
  };

  const handleOrder = () => {
    if (!isLoggedIn) {
      localStorage.setItem(
        "redirectAfterLogin",
        JSON.stringify({ path: "/payment", state })
      );
      alert("Please login to continue");
      navigate("/login");
      return;
    }

    if (!addressAdded) {
      alert("Please add your address before proceeding");
      return;
    }

    if (!selectedPayment) {
      alert("Please select a payment option");
      return;
    }

    localStorage.removeItem("paymentSelection");
    navigate("/delivery", { state: { productImage: product?.img || defaultCakeImg } });
  };

  return (
    <div className="mt-28 text-gray-800 min-h-screen p-4 sm:p-8 space-y-10">

      <section className="p-6">
        <h2 className="text-md md:text-xl lg:text-2xl text-center text-[#e57f35] font-bold tracking-wide mb-6">
          PRODUCT DETAILS
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
         <div className="flex justify-center">
  <img
    src={product?.img || defaultCakeImg}
    alt={product?.title || "Product"}
    className="rounded-lg shadow-lg w-[30rem] h-[30rem] object-cover"
  />
</div>

          <div className="mt-10">
            <p className="text-sm font-bold text-gray-600 mb-1">Cherii bakery</p>
            <h3 className="text-2xl font-bold text-[#e57f35] mb-3">{product?.title || "Delicious Cake"}</h3>
            <p className="text-lg font-semibold leading-snug mb-4">{product?.description || "Tasty product description"}</p>
            <p className="text-2xl font-bold">₹ {pricePerKg}</p>
            <p className="text-sm text-gray-500 mb-6">INCL. OF ALL TAXES</p>

            <div className="mb-6">
              <p className="font-semibold">WEIGHT:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`px-4 py-1.5 border rounded text-sm font-medium transition-all
                      ${weight === w ? "bg-[#f4d03c] border-yellow-500" : "bg-white border-gray-300 hover:bg-gray-100"}`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-semibold mb-2">QUANTITY:</p>
              <div className="flex items-center border border-gray-300 rounded w-28">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                >-</button>
                <span className="flex-1 text-center text-lg font-medium">{quantity.toString().padStart(2, "0")}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                >+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-center text-[#e57f35] font-bold text-lg tracking-wide mb-4">ADD ADDRESS</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div className="space-y-6">
            {[
              { label: "Name*", key: "name" },
              { label: "Delivery Location*", key: "location" },
              { label: "Mobile No*", key: "mobile" },
              { label: "Add Notes", key: "notes" }
            ].map(({ label, key }) => (
              <label key={key} className="block text-md font-medium text-gray-700">
                {label}
                <input
                  type="text"
                  value={address[key]}
                  onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                  className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>
            ))}

            <label className="block text-md font-medium text-gray-700">
              Address*
              <textarea
                rows={3}
                value={address.fullAddress}
                onChange={(e) => setAddress({ ...address, fullAddress: e.target.value })}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>

            <button
              onClick={handleAddAddress}
              className="bg-[#f4d03c] hover:bg-yellow-500 w-full py-2 rounded-full font-semibold transition-colors"
            >
              ADD ADDRESS
            </button>
          </div>
          <div className="flex justify-center">
            <img src={defaultCakeImg} alt="Dessert" className="w-full max-w-xs rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </section>

      <section className="p-6 space-y-8">
        <h2 className="text-center text-lg text-[#e57f35] font-bold tracking-wide">PAYMENT OPTIONS</h2>

        <div className="max-w-4xl mx-auto border border-gray-300 rounded p-6 space-y-6">
          {[
            { img: pay1Img, label: "Pay UPI", key: "upi" },
            { img: pay2Img, label: "Pay Wallet", key: "wallet" },
            { img: pay3Img, label: "Pay Credit Card", key: "credit" }
          ].map(({ img, label, key }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-14 h-14 rounded-full bg-[#d99a6c] flex items-center justify-center">
                  <img src={img} alt={label} className="w-10 h-10" />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm">+{label} Id</p>
                  <input
                    type="text"
                    placeholder="Enter Id"
                    className="border border-gray-300 rounded w-40 p-1 mt-1 text-sm"
                  />
                </div>
              </div>
              <input
  type="checkbox"
  name="paymentOption"
  checked={selectedPayment === key}
  onChange={() => handlePaymentSelect(key)}
  className="w-4 h-4 border-2 border-[#d99a6c] rounded"
/>

            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-sm font-bold">
          <div className="flex justify-between"><span>QUANTITY</span><span>{quantity} {weight} {displayCategory}</span></div>
          <div className="flex justify-between"><span>TOTAL PRODUCT PRICE</span><span>₹ {totalProductPrice.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>DISCOUNT AMOUNT 15%</span><span>-₹ {discountAmount.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>DELIVERY FEE</span><span>+₹ {deliveryFee}</span></div>
          <div className="flex justify-between"><span>INCL.GST5%</span><span>+₹ {gstAmount.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold mt-4"><span>TOTAL PRICE AMOUNT</span><span>₹ {total.toFixed(2)}</span></div>

          <button
            onClick={handleOrder}
            className={`w-80 py-2 rounded-full font-semibold mt-8 mx-auto block
              ${isLoggedIn ? "bg-[#F4d03c] hover:bg-yellow-500" : "bg-[#F4d03c] cursor-not-allowed"}`}
          >
            PAY & ORDER NOW
          </button>
        </div>
      </section>

      <div className="flex justify-center my-2">
        <img src={designs} alt="divider" className="w-2/3 md:w-2/3" />
      </div>
    </div>
  );
};

export default PaymentPage;

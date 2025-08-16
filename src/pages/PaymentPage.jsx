import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import defaultCakeImg from "../assets/images/cake_pay.jpg";
import pay1Img from "../assets/images/upi.png";
import pay2Img from "../assets/images/wallet.png";
import pay3Img from "../assets/images/credit-card.png";
import designs from "../assets/images/faq1.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, updateWeight, clearCart } = useCart();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const location = useLocation();
  const { cartItems = [] } = location.state || {};

  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      setLocalItems(cart);
    } else {
      const withDefaults = cartItems.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
        selectedWeight: item.selectedWeight || "1 KG",
      }));
      setLocalItems(withDefaults);
    }
  }, [cart, cartItems]);

  const itemsToDisplay = localItems;

  const [address, setAddress] = useState({
    name: "",
    location: "",
    mobile: "",
    notes: "",
    fullAddress: "",
  });
  const [addressAdded, setAddressAdded] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [discount] = useState(0.15);
  const [deliveryFee] = useState(40);
  const [gstRate] = useState(0.05);

  const handleWeightChange = (id, oldWeight, newWeight) => {
    if (cart.length > 0) {
      updateWeight(id, oldWeight, newWeight);
    } else {
      setLocalItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, selectedWeight: newWeight } : item
        )
      );
    }
  };

  const handleQuantityChange = (id, weight, newQty) => {
    if (newQty < 1) return;
    if (cart.length > 0) {
      updateQuantity(id, weight, newQty);
    } else {
      setLocalItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  // Convert weight string → number (kg)
  const getWeightInKg = (w) => {
    if (!w) return 1;
    const lower = w.toLowerCase().trim();
    if (lower.endsWith("kg")) return parseFloat(lower.replace("kg", "").trim());
    if (lower.endsWith("g")) return parseFloat(lower.replace("g", "").trim()) / 1000;
    return 1;
  };

  const productTotals = itemsToDisplay.map((item) => {
    const weightKg = getWeightInKg(item.selectedWeight || "1 KG");
    return {
      ...item,
      total: item.price * (item.quantity || 1) * weightKg,
    };
  });

  const totalProductPrice = productTotals.reduce((acc, i) => acc + i.total, 0);
  const discountAmount = totalProductPrice * discount;
  const gstAmount = (totalProductPrice - discountAmount) * gstRate;
  const total = totalProductPrice - discountAmount + deliveryFee + gstAmount;

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

  const handleOrder = () => {
    if (!isLoggedIn) {
      localStorage.setItem(
        "redirectAfterLogin",
        JSON.stringify({
          path: "/payment",
          state: { cartItems: itemsToDisplay },
        })
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

    const orderImages = itemsToDisplay.map((item) => item.img || defaultCakeImg);
    clearCart();

    navigate("/delivery", {
      state: { productImages: orderImages },
    });
  };

  return (
    <div className="mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0]  text-gray-800 min-h-screen p-4 sm:p-8 space-y-10">

      <section className="p-6">
        <h2 className="text-md md:text-xl lg:text-2xl text-center text-[#e57f35] font-bold tracking-wide mb-6">
          PRODUCT DETAILS
        </h2>
        <div className="space-y-12 max-w-6xl mx-auto">
          {itemsToDisplay.map((item) => (
            <div key={item.id} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center">
                <img
                  src={item.img || defaultCakeImg}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-[30rem] h-[30rem] object-cover"
                />
              </div>
              <div className="mt-10">
                <p className="text-sm font-bold text-gray-600 mb-1">Cherii bakery</p>
                <h3 className="text-2xl font-bold text-[#e57f35] mb-3">
                  {item.title || "Delicious Cake"}
                </h3>
                <p className="text-lg font-semibold leading-snug mb-4">
                  {item.description || "Tasty product description"}
                </p>
                <p className="text-2xl font-bold">₹ {item.price}</p>
                <p className="text-sm text-gray-500 mb-6">INCL. OF ALL TAXES</p>

                {/* Weight Selection */}
                <div className="mb-6">
                  <p className="font-semibold">WEIGHT:</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"].map((w) => (
                      <button
                        key={w}
                        onClick={() => handleWeightChange(item.id, item.selectedWeight, w)}
                        className={`px-4 py-1.5 border rounded text-sm font-medium
                          ${item.selectedWeight === w
                            ? "bg-[#f4d03c] border-yellow-500"
                            : "bg-white border-gray-300"
                          }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div>
                  <p className="font-semibold mb-2">QUANTITY:</p>
                  <div className="flex items-center border border-gray-300 rounded w-28">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.selectedWeight, (item.quantity || 1) - 1)}
                      className="px-3 py-1 text-lg"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-lg font-medium">
                      {(item.quantity || 1).toString().padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.selectedWeight, (item.quantity || 1) + 1)}
                      className="px-3 py-1 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

        {/* ADDRESS SECTION */}
      <section className="p-6">
        <h2 className="text-center text-[#e57f35] font-bold text-lg tracking-wide mb-4">
         ADD ADDRESS
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
         <div className="space-y-6">
            {[
              { label: "Name*", key: "name" },
              { label: "Delivery Location*", key: "location" },
              { label: "Mobile No*", key: "mobile" },
              { label: "Add Notes", key: "notes" },
            ].map(({ label, key }) => (
              <label key={key} className="block text-md font-medium text-gray-700">
                {label}
                <input
                  type="text"
                  value={address[key]}
                  onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                  className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm"
                />
              </label>
            ))}
            <label className="block text-md font-medium text-gray-700">
              Address*
              <textarea
                rows={3}
                value={address.fullAddress}
                onChange={(e) =>
                  setAddress({ ...address, fullAddress: e.target.value })
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm"
              />
            </label>
            <button
              onClick={handleAddAddress}
              className="bg-[#f4d03c] hover:bg-yellow-500 w-full py-2 rounded-full font-semibold"
            >
              ADD ADDRESS
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={defaultCakeImg}
              alt="Dessert"
              className="w-full max-w-xs rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* PAYMENT SECTION */}
      <section className="p-6 space-y-8">
        <h2 className="text-center text-lg text-[#e57f35] font-bold tracking-wide">
          PAYMENT OPTIONS
        </h2>

        <div className="max-w-4xl mx-auto border border-gray-300 rounded p-6 space-y-6">
  {[
    { img: pay1Img, label: "Pay UPI", key: "upi" },
    { img: pay2Img, label: "Pay Wallet", key: "wallet" },
    { img: pay3Img, label: "Pay Credit Card", key: "credit" },
  ].map(({ img, label, key }) => (
    <div
      key={key}
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      {/* Left section */}
      <div className="flex items-center gap-3 flex-1">
        <div className="w-14 h-14 rounded-full bg-[#d99a6c] flex items-center justify-center shrink-0">
          <img src={img} alt={label} className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">{label}</p>
          <p className="text-sm">+{label} Id</p>
          <input
            type="text"
            placeholder="Enter Id"
            className="border border-gray-300 rounded w-full sm:w-40 p-1 mt-1 text-sm"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex sm:block justify-end">
        <input
          type="checkbox"
          name="paymentOption"
          checked={selectedPayment === key}
          onChange={() => setSelectedPayment(key)}
          className="w-4 h-4 border-2 border-[#d99a6c] rounded"
        />
      </div>
    </div>
  ))}
</div>


        {/* BILL SUMMARY */}
        <div className="max-w-4xl mx-auto space-y-6 text-sm font-bold">
          <div className="flex justify-between items-start">
            <span>QUANTITY</span>
            <div className="text-right">
              {productTotals.map((i) => (
                <div key={i.id}>
                  {i.quantity} {i.selectedWeight} {i.category?.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <span>TOTAL PRODUCT PRICE</span>
            <span>₹ {totalProductPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>DISCOUNT AMOUNT 15%</span>
            <span>-₹ {discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>DELIVERY FEE</span>
            <span>+₹ {deliveryFee}</span>
          </div>
          <div className="flex justify-between">
            <span>INCL.GST5%</span>
            <span>+₹ {gstAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>TOTAL PRICE AMOUNT</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleOrder}
            className={`w-80 py-2 rounded-full font-semibold mt-8 mx-auto block
              ${
                isLoggedIn
                  ? "bg-[#F4d03c] hover:bg-yellow-500"
                  : "bg-[#F4d03c] cursor-not-allowed"
              }`}
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


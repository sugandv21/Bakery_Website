import React from "react";
import { useLocation } from "react-router-dom";
import TruckOrder from "../components/TruckOrder";

const DeliveryDetails = () => {
  const { state } = useLocation();
  const productImage = state?.productImage;

  const orderDate = new Date();

  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(orderDate.getDate() + 1);
  deliveryDate.setHours(0, 0, 0, 0);

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB") +
    " " +
    date
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
      .replace(" ", ".");

  return (
    <section className="mt-28 min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-lg md:text-xl mb-8">
        THE ORDER WAS PROCESSED, FULFILLED, AND DELIVERED <br /> AS WITHIN ONE DAY
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl items-center">
        <div className="space-y-6">
          <h2 className="font-bold text-lg md:text-2xl ">ORDER SUMMARY</h2>
          <p className="font-semibold ms-8">
            <span>PRODUCT ID:</span> DRF43567GS48JGDS
          </p>
          <p className="font-semibold ms-8">
            <span className="font-semibold">ORDER DATE:</span> {formatDate(orderDate)}
          </p>
          <p className="font-semibold ms-8">
            <span className="font-semibold">EXPECTED DELIVERY DATE:</span> {formatDate(deliveryDate)}
          </p>
          <p className="font-semibold ms-8">
            <span className="font-semibold">TRACKING ID:</span> Zfvdf457G
          </p>
        </div>

        <div className="flex justify-center">
          {productImage ? (
            <img
              src={productImage}
              alt="Product"
              className="rounded-lg shadow-lg max-w-xs w-full object-cover"
            />
          ) : (
            <p className="text-gray-500">No product image available</p>
          )}
        </div>
      </div>
     <TruckOrder orderDate={orderDate} deliveryDate={deliveryDate} />

    </section>
  );
};

export default DeliveryDetails;

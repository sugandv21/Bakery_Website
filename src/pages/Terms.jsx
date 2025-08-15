import React from "react";
import logo from "../assets/images/logo2.png";
import { FaUserCheck, FaBox, FaShippingFast, FaMoneyBillWave } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="min-h-screen mt-28 p-6">
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
        <img src={logo} alt="Cherii" className="mx-auto mb-4 w-32" />
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserCheck className="text-[#d99a6c]"/> User Accounts
          </h2>
          <p>
            Users must provide accurate information when creating accounts. Sharing account
            credentials is prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaBox className="text-[#d99a6c]"/> Orders & Deliveries
          </h2>
          <p>
            Orders will be processed promptly. Delivery times are estimates and may vary
            based on location or product availability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaMoneyBillWave className="text-[#d99a6c]"/> Payment Terms
          </h2>
          <p>
            Payment must be completed at the time of order. We accept all listed payment
            methods. Refunds are subject to our refund policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaShippingFast className="text-[#d99a6c]"/> Shipping & Returns
          </h2>
          <p>
            Shipping policies, including costs and timelines, are provided at checkout.
            Returns are governed by the Refund & Cancellation Policy.
          </p>
        </section>

      </div>
    </div>
  );
}

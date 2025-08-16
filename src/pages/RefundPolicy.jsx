import React, { useEffect } from "react";
import logo from "../assets/images/logo2.png";
import { FaUndoAlt, FaClock, FaCreditCard, FaExclamationTriangle } from "react-icons/fa";

export default function RefundPolicy() {
   useEffect(() => {
      document.title = "CHERRI | REFUND POLICY";  
    }, []);
  return (
    <div className="min-h-screen mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0] p-6">
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
        <img src={logo} alt="Cherii" className="mx-auto mb-4 w-32" />
        <h1 className="text-4xl font-bold mb-6 text-center">Refund & Cancellation Policy</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUndoAlt className="text-[#d99a6c]"/> Order Cancellation
          </h2>
          <p>
            Customers can cancel an order within 24 hours of placement. Cancellation requests
            should be sent to our support email or through the contact form on our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaClock className="text-[#d99a6c]"/> Refund Timeline
          </h2>
          <p>
            Approved refunds are processed within 5–7 business days. Please note that
            processing times may vary depending on your bank or payment method.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaCreditCard className="text-[#d99a6c]"/> Refund Method
          </h2>
          <p>
            Refunds will be returned using the original payment method. Ensure your
            account details are accurate to avoid delays.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaExclamationTriangle className="text-[#d99a6c]"/> Eligibility
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Products must be unused and in original packaging.</li>
            <li>Perishable goods cannot be returned unless defective.</li>
            <li>Defective or damaged items are eligible for full refund.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

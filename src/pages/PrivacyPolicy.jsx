import React from "react";
import logo from "../assets/images/logo2.png";
import { MdEmail, MdLocationOn, MdSecurity } from "react-icons/md";
import { FaCookieBite, FaUserShield } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-28 p-6">
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
        <img src={logo} alt="Cherii" className="mx-auto mb-4 w-32" />
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MdSecurity className="text-[#d99a6c]"/> Data Protection
          </h2>
          <p>
            We value your privacy and are committed to protecting your personal information.
            All personal data you provide is stored securely and used only for processing orders
            and improving our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaCookieBite className="text-[#d99a6c]"/> Cookies & Tracking
          </h2>
          <p>
            Our website uses cookies to improve user experience. Cookies help us remember
            your preferences and provide personalized recommendations. You can disable cookies
            in your browser settings if preferred.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MdEmail className="text-[#d99a6c]"/> Email Communication
          </h2>
          <p>
            We may contact you via email for order updates, promotional offers, and customer support.
            You can unsubscribe from marketing emails anytime.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserShield className="text-[#d99a6c]"/> Third-Party Services
          </h2>
          <p>
            We may use trusted third-party services for payment processing, delivery, and analytics.
            No third party has access to your personal data beyond what is required for service delivery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MdLocationOn className="text-[#d99a6c]"/> Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

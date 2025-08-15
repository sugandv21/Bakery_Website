import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../assets/images/logo2.png";
import footerBg from "../assets/images/Footer1.jpeg";
import footerOverlay from "../assets/images/footer2.png";
import insta from "../assets/images/insta.png";
import linkedIn from "../assets/images/linkdIn.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import locationImg from "../assets/images/location.png";
import mailImg from "../assets/images/mail.png";
import phoneImg from "../assets/images/phone.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="relative py-4 overflow-hidden text-lg">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-10"
        style={{ backgroundImage: `url(${footerOverlay})` }}
      ></div>

      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-14">

        <div className="w-[150px] mt-2 mx-auto md:mx-0">
          <img src={logo} alt="Cherii" className="mb-2" />
        </div>

        <div className="w-full sm:w-[250px] mx-auto md:mx-20 text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Quick Links</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
            <li><Link to="/delivery" className="hover:underline">Track Your Order</Link></li>
            <li><Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/refundpolicy" className="hover:underline">Refund & Cancellation Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div className="mx-auto md:mx-20 text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Shop</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
            <li><Link to="/cookies" className="hover:underline">Cookies</Link></li>
            <li><Link to="/muesli" className="hover:underline">Muesli</Link></li>
            <li><Link to="/granola-bars" className="hover:underline">Granola Bars</Link></li>
            <li><Link to="/seed-mixes" className="hover:underline">Seed Mixes</Link></li>
            <li><Link to="/giftbox" className="hover:underline">Gift Boxes</Link></li>
            <li><Link to="/super-savers" className="hover:underline">Super Savers</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Contact</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
  <li className="flex flex-col md:flex-row md:items-start md:gap-2">
    <img src={locationImg} alt="Location" className="w-6 h-6 mx-auto md:mx-0" />
    <span>No.45, Anna Salai, T. Nagar, Chennai - 600 017</span>
  </li>
  <li className="flex flex-col md:flex-row md:items-center md:gap-2">
    <img src={mailImg} alt="Email" className="w-6 h-6 mx-auto md:mx-0" />
    <a href="mailto:info@cherii.com" className="hover:underline">info@cherii.com</a>
  </li>
  <li className="flex flex-col md:flex-row md:items-center md:gap-2">
    <img src={phoneImg} alt="Phone" className="w-6 h-6 mx-auto md:mx-0" />
    <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
  </li>
</ul>

          <div className="mt-4">
            <h4 className="font-bold mb-2 text-lg">Follow us</h4>
            <div className="flex justify-center md:justify-start gap-4">
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img
      src={insta}
      alt="Instagram"
      className="w-10 h-10 rounded cursor-pointer"
    />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img
      src={linkedIn}
      alt="LinkedIn"
      className="w-10 h-10 rounded cursor-pointer"
    />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img
      src={facebook}
      alt="Facebook"
      className="w-10 h-10 rounded cursor-pointer"
    />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img
      src={youtube}
      alt="YouTube"
      className="w-10 h-10 rounded cursor-pointer"
    />
  </a>
</div>


          </div>
        </div>
      </div>
    </footer>
  );
}


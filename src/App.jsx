import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import ProductsSection from "./pages/ProductsSection";
import Savories from "./pages/Savories";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Wishlist from "./pages/Wishlist";
import Rusk from "./pages/Rusk";
import PaymentPage from "./pages/PaymentPage";
import DeliveryDetails from "./pages/DeliveryDetails";
import AuthPage from "./pages/AuthPage";
import Cake from "./pages/Cake";
import Sweet from "./pages/Sweet";
import AboutUs from "./pages/AboutUs";
import BakeryBlog from "./pages/BakeryBlog";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Cookies from "./pages/Cookies";
import Pastries from "./pages/Pastries";
import Giftbox from "./pages/GiftBox";
import Chocolate from "./pages/Chocolate";
import CreamRoll from "./pages/CreamRoll";
import Muffins from "./pages/Muffins";
import Chips from "./pages/Chips";
import Bread from "./pages/Bread";
import Footer from "./components/Footer";
import Testimonial from "./pages/Testimonial";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import Chat from "./pages/Chat";
import SeedMixes from "./pages/SeedMixes";
import SuperSavers from "./pages/SuperSavers";
import GranolaBars from "./pages/GranolaBars";
import Muesli from "./pages/Muesli";

function App() {
  return (
     <WishlistProvider>
       <CartProvider> 
        <AuthProvider>
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
       
        <Route path="/blog" element={<BakeryBlog />} />
         <Route path="/contact" element={<ContactUs/>} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/sevories" element={<Savories />} />
         <Route path="/rusk" element={<Rusk />} />
           <Route path="/cakes" element={<Cake />} />
           <Route path="/cookies" element={<Cookies />} />
           <Route path="/giftbox" element={<Giftbox />} />
            <Route path="/sweets" element={<Sweet />} />
            <Route path="/creamroll" element={<CreamRoll />} />
            <Route path="/muffins" element={<Muffins />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/breads" element={<Bread />} />
             <Route path="/Chocolates" element={<Chocolate />} />
             <Route path="/pastries" element={<Pastries />} />
              <Route path="/chat" element={<Chat />} />
               <Route path="/muesli" element={<Muesli />} />
               <Route path="/seed-mixes" element={<SeedMixes />} />
                <Route path="/super-savers" element={<SuperSavers />} />
                 <Route path="/granola-bars" element={<GranolaBars />} />
             <Route path="/testimonial" element={<Testimonial />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
           <Route path="/delivery" element={<DeliveryDetails />} />
           <Route path="/login" element={<AuthPage />} />
           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
           <Route path="/refundpolicy" element={<RefundPolicy />} />
           <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
     </CartProvider> 
    </WishlistProvider>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import AdvertsList from "./components/pages/advertsList/AdvertsList";
import Merchant from "./components/pages/merchantDetails/Merchant";
import Merchants from "./components/pages/merchants/MerchantList";
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Advert from './components/pages/advertDetails/Advert';
import Merchant_about from './components/pages/merchantDetails/Merchant_about';
import Merchant_review from './components/pages/merchantDetails/Merchant_review';
import Register from './components/pages/Auth/Register';
import Login from './components/pages/Auth/Login';
import Contact from './components/pages/Contact';
import Blog from './components/pages/blog/Blog';
import Blog_Details from './components/pages/blog/Blog_Details';
import Template from './components/pages/Template';
import Faq from './components/pages/Faq';
import Pricing from './components/pages/Pricing';
import Favorites from './components/pages/Favorites';
import PlaceTheOrder from './components/pages/placeTheOder/PlaceTheOrder';
import Cart from './components/pages/cart/Cart';
import PopupSMSshop from './components/pages/advertDetails/PopupSMSshop';
import Checkout from './components/pages/checkout/Checkout';
import { useState } from 'react';

function App() {
  const [slug, setSlugLanguage] = useState('fr');
  // alert(window.location.href.indexOf(slug));

  if (window.location.href.indexOf(slug) == -1){
    let origin = window.location.origin;
    let pathname = window.location.pathname
    let new_url = origin+ "/"+slug+pathname 
    window.location = new_url;
  }
  return (
    
    <Routes>
      <Route path={`/${slug}/`} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="annonces" element={<AdvertsList />} />
        <Route path="merchants" element={<Merchants />} />
        <Route path="merchants/merchant" element={<Merchant />} />
        <Route path="advert/:id" element={<Advert />} />
        <Route path="merchant_about" element={<Merchant_about />} />
        <Route path="merchant_review" element={<Merchant_review />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/blog_details" element={<Blog_Details />} />
        <Route path="template" element={<Template />} />
        <Route path="faq" element={<Faq />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="placeOder" element={<PlaceTheOrder />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="PopupSMSshop" element={<PopupSMSshop />} />
      </Route>

    </Routes>
  );
}

export default App;

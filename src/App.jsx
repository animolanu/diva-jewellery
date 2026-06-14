
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Account from "./pages/Account";
import HelpCenter from "./pages/HelpCenter";
import Collections from "./pages/Collections";

import Products from "./pages/Products";

import Rings from "./pages/Rings";
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";

import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import GetIt from "./pages/getit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/getit" element={<GetIt />} />

        {/* MAIN PRODUCTS PAGE */}
        <Route path="/products" element={<Products />} />

        {/* CATEGORY PAGES (FIXED) */}
        <Route path="/rings" element={<Rings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/earrings" element={<Earrings />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
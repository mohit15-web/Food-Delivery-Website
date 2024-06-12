import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Footer } from "./components/Footer";
import RestaurantDetails from "./components/RestaurantDetails";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Cart } from "./pages/Cart/Cart";
import ScrollToTop from "./components/ScrollToTop";
import Food from "./pages/Foods/Food";
import AskAi from "./pages/AskAI/AskAi";
import Payment from "./components/Payment";
import { Checkout } from "./components/Checkout";
const App = () => {
  return (
    <div className="App dark:bg-[rgb(32,33,36)]">
      <ScrollToTop/>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/food" element={<Food />} />
        <Route path="/askai" element={<AskAi />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="/ReastaurantDetail/:id" element={<RestaurantDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

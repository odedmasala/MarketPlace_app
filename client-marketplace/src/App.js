import React from "react";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import SuccessPayment from "./pages/successPayment/SuccessPayment";
import ProfilePage from "./pages/profile/ProfilePage";
import MyOrders from "./pages/profile/MyOrders";
import Product from "./components/product/Product";
import PersonalDetails from "./pages/profile/PersonalDetails";
import Store from "./pages/storePage/Store";
import StoresListPage from "./pages/storeslist/StoresListPage";
import LoginPopUP from "./components/auth/login/LoginPopUP";

const App = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/profile/myOrders" element={<MyOrders />} />
          <Route path="/profile/details" element={<PersonalDetails />} />
        </Route>
        <Route path="/successPage" element={<SuccessPayment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:id/stores" element={<StoresListPage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default App;

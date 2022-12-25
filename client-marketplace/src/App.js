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
import StoreManager from "./pages/storeManager/StoreManager";
import MainInfo from "./components/info/MainInfo";
import AboutPage from "./components/info/about/AboutPage";
import QuestionsPage from "./components/info/questions/QuestionsPage";
import BlogPage from "./components/info/blog/BlogPage";
import CompanyPage from "./components/info/company/CompanyPage";
import HeadlinesPage from "./components/info/headlines/HeadlinesPage";
import SuppliersPage from "./components/info/suppliers/SuppliersPage";
import AddProduct from "./components/storeManager/addProduct/AddProduct";
import PersonalData from "./components/storeManager/personalData/PersonalData";
import PersonalDetails from "./pages/profile/PersonalDetails";
import Store from "./pages/storePage/Store";
import StoresListPage from "./pages/storeslist/StoresListPage";
import LoginPopUP from "./components/auth/login/LoginPopUP";
import SectionStoreManager from "./components/storeManager/allProducts/sectionStoreManager/SectionStoreManager";
import ProductPage from "./components/storeManager/allProducts/ProductPage";
import AllStores from "./components/storeManager/allProducts/AllStores";
import MyAddress from "./pages/profile/MyAddress";

const App = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />}>
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="details" element={<PersonalDetails />} />
          <Route path="myAddress" element={<MyAddress />} />
        </Route>

        <Route path="successPage" element={<SuccessPayment />} />
        <Route path="product" element={<Product />} />
        <Route path="store" element={<Store />} />
        <Route path="storeManager" element={<StoreManager />}>
          <Route path="allStores" element={<AllStores />} />
          <Route path="section/:id" element={<SectionStoreManager />} />
          <Route path="allProduct/:id" element={<ProductPage />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="personalData" element={<PersonalData />} />
        </Route>
        <Route path="info" element={<MainInfo />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="questions" element={<QuestionsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="headlines" element={<HeadlinesPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
        </Route>
        <Route path=":id/stores" element={<StoresListPage />} />
        <Route path="store/:id" element={<Store />} />
      </Routes>
    </div>
  );
};

export default App;

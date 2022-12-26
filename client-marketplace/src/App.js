import React from "react";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  NavBar,
  Product,
  MainInfo,
  AboutPage,
  QuestionsPage,
  BlogPage,
  CompanyPage,
  HeadlinesPage,
  SuppliersPage,
  AddProduct,
  AddCategory,
  SectionStoreManager,
  AllStores,
} from "./components";
import {
  HomePage,
  SuccessPayment,
  ProfilePage,
  MyOrders,
  MyAddress,
  StoreManager,
  PersonalDetails,
  Store,
  StoresListPage,
} from "./pages";

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
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="personalData" element={<AddCategory />} />
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

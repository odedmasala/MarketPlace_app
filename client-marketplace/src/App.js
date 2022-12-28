import React, { useEffect, useState } from "react";
import "./css/style.css";
import "react-toastify/dist/ReactToastify.css";

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
  CheckOut,
} from "./pages";
import useAxios from "./hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { fetchUser, clearUser, getUser } from "./redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const [userData, setUseData] = useState();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
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
        <Route path="checkOut" element={<CheckOut />} />
        <Route path="storeManager" element={<StoreManager />}>
          <Route path="allStores" element={<AllStores />} />
          <Route path="section/:id" element={<SectionStoreManager />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="addSection" element={<AddCategory />} />
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

      <ToastContainer />
    </div>
  );
};

export default App;

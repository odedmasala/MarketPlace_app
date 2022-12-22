import React from 'react';
import './css/style.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import HeaderStore from './components/header/HeaderStore';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import SuccessPayment from './pages/successPayment/SuccessPayment';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      {/* <HeaderStore /> */}
      {/* <HomePage /> */}
      <Cart />
      {/* <SuccessPayment/> */}
      <Footer />
    </div>
  );
};

export default App;

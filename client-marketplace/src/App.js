import React from 'react';
import './css/style.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/homePage/HomePage';
import SuccessPayment from './pages/successPayment/SuccessPayment';
import Header from "./components/header/Header"
import MainInfo from './components/info/MainInfo';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <MainInfo/>
      <HomePage/>
      <SuccessPayment/>
      <Footer />
    </div>
  );
};

export default App;

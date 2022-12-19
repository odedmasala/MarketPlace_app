import React from 'react';
import './css/style.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Product from './components/product/Product';
import HomePage from './components/homePage/HomePage';

const App = () => {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <Footer />
    </div>
  );
};

export default App;

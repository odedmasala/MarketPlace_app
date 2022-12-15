import React from 'react';
import './css/style.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Product from './components/product/Product';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Product />
      <Footer />
    </div>
  );
};

export default App;

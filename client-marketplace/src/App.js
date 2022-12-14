import React from 'react'
import './css/style.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Product from './components/product/Product'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
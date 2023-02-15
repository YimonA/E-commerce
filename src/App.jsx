import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';

const App = () => {
  return (
    <>
    <div className=" container-fluid  ">
      <div className="container">
      <h3 className="text-center user-select-none my-2 py-2 text-white bg-primary">ecommerce.com.mm <br />E-commerce website by React</h3>
      </div>
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
    </>
  )
}

export default App

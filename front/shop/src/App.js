import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;

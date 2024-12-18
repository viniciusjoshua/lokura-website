import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Signup from './components/pages/Signup.jsx';
import Products from './components/pages/Products.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
    </div>
  );
}

export default App;


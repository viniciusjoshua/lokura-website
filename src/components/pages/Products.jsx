import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        <li><Link to="/products/red-wine">Red Wine</Link></li>
        <li><Link to="/products/rose-wine">Rose Wine</Link></li>
        <li><Link to="/products/other">Other Products</Link></li>
      </ul>
    </div>
  );
};

export default Products;

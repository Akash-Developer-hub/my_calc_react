import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="quantity-controls">
        <button onClick={decrement}><FaMinus /></button>
        <span>{quantity}</span>
        <button onClick={increment}><FaPlus /></button>
      </div>
      <button className="add-to-cart">
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

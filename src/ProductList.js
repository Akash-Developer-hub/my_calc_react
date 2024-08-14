import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Laptop', description: 'HP Laptop 15s, 12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe graphics, Backlit KB,MSO,Thin & Light, Dual speakers (Win 11, Silver, 1.69 kg), fq5330TU', price: 100, image: 'laptop.jpg' },
  { id: 2, name: 'Mobile', description: 'OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)', price: 50, image: 'mobile.jpg' },
  // Add more products here
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

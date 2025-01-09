// src/components/ProductCard.js
import { useDispatch } from 'react-redux';

import React, { useCallback } from 'react';
import { addToCart } from '../features/cart/cartSlice';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  
  const onAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  },[dispatch]);

  return (
    <div className="border text-center p-4 rounded-lg">
      <img src={product.image} alt={product.name} style={{height:'100px'}} className="w-32 text-center h-32 object-cover mb-4" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-black py-2 px-4 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

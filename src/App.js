// src/App.js
import React, { useState } from 'react';
import { useGetProductsByCategoryQuery } from './features/api/productsApi';
import ProductGrid from './components/ProductGrid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './features/cart/cartSlice';
import Header from './components/Header';
import CartSummary from './components/CartSummary';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const dispatch = useDispatch();

  const { data: products, error, isLoading } = useGetProductsByCategoryQuery({
    category: selectedCategory,
    minPrice,
    maxPrice,
  });

  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      dispatch(updateQuantity({ productId, quantity: product.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      dispatch(updateQuantity({ productId, quantity: product.quantity - 1 }));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {products && products.length === 0 && <p>No products available for this category.</p>}

      {products && products.length > 0 && <ProductGrid products={products} onAddToCart={handleAddToCart} />}

      <CartSummary
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
    </div>
  );
};

export default App;

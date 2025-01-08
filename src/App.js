// src/App.js
import React, { useState } from 'react';
import { useGetProductsByCategoryQuery } from './features/api/productsApi';
import ProductGrid from './components/ProductGrid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './features/cart/cartSlice';

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

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

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Store</h1>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Wearables">Wearables</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="price-range" className="block font-semibold">Price Range:</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-1/2"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-1/2"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span>Min Price: ${minPrice}</span>
          <span>Max Price: ${maxPrice}</span>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {products && products.length === 0 && <p>No products available for this category.</p>}

      {products && products.length > 0 && <ProductGrid products={products} onAddToCart={handleAddToCart} />}

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Cart Summary</h2>
        <p>Total items: {cart.length}</p>
        <p>Total price: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>
      </div>

      {cart.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} (x{item.quantity})</span>
                <div>
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

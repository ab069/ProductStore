// src/components/Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // You can install react-icons if not installed yet
import CartPopup from './CartPopup'; // Import the CartPopup component

//import CartSummary from './CartSummary';

const Header = ({ selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const [showCart, setShowCart] = useState(false); // To toggle cart popup visibility
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux state

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  const toggleCartPopup = () => {
    setShowCart(!showCart); // Toggle cart popup visibility
  };

  return (
    <div className="mb-8 text-center bg-blue-500">
      <h1 className="text-2xl font-bold mb-6">Product Store</h1>

      <div className="container">
        <div className="row justify-content-between">
          {/* Category Selector */}
          <div className="col-12 col-md-3 mb-4">
            <label htmlFor="category" className="block font-semibold">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="form-select w-100"
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Wearables">Wearables</option>
            </select>
          </div>

          {/* Price Range Selector */}
          <div className="col-12 col-md-6 mb-4">
            <label htmlFor="price-range" className="block font-semibold">Price Range</label>
            <div className="d-flex flex-column align-items-center gap-3">
              <div className="d-flex justify-content-between gap-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="w-50"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-50"
                />
              </div>
              <div className="d-flex justify-content-between w-100 mt-2">
                <span>Min Price: ${minPrice}</span>
                <span>Max Price: ${maxPrice}</span>
              </div>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-end align-items-center">
            <div
              onClick={toggleCartPopup}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <AiOutlineShoppingCart size={30} />
              {/* Cart Item Count */}
              <span
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '-10px',
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '5px 8px',
                  borderRadius: '50%',
                  fontSize: '14px',
                }}
              >
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Popup */}
      {showCart && 
    //    <CartSummary  />
     <CartPopup  closePopup={toggleCartPopup} 
       />
      }
    </div>
  );
};

export default Header;

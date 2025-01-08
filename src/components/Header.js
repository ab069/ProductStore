// src/components/Header.js
import React from 'react';

const Header = ({ selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="mb-8" style={{ textAlign: 'center' }}>
      <h1 className="text-2xl font-bold mb-6">Product Store</h1>

      <div className="flex justify-center items-center gap-8 mb-4">
        {/* Category Selector */}
        <div style={{position:'absolute',top:'10%', left:'10%'}}> 
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

        {/* Price Range Selector */}
        <div  className="flex items-center gap-4">
          <div>
            <label htmlFor="price-range" className="block font-semibold">Price Range:</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="w-32"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="w-32"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span>Min Price: ${minPrice}</span>
              <span>Max Price: ${maxPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

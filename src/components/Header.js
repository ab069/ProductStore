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
    <div className="mb-8 text-center">
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
        </div>
      </div>
    </div>
  );
};

export default Header;

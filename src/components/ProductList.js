// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, setFilters } from '../features/productStoreSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading, error, filters } = useSelector(state => state.productStore);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div>
      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        <input
          type="range"
          name="priceRange"
          min="0"
          max="1000"
          value={filters.priceRange[1]}
          onChange={handleFilterChange}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

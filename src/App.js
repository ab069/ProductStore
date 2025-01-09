// src/App.js
import React, { useState } from 'react';
import { useGetProductsByCategoryQuery } from './features/api/productsApi';
import ProductGrid from './components/ProductGrid';


import Header from './components/Header';
//import './output.css'; // or './App.css'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const { data: products, error, isLoading } = useGetProductsByCategoryQuery({
    category: selectedCategory,
    minPrice,
    maxPrice,
  });




  return (
    <div className="container mx-auto p-4">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {products && products.length === 0 && <p>No products available for this category.</p>}

      {products && products.length > 0 && <ProductGrid products={products}  />}

      {/* <CartSummary
      /> */}
    </div>
  );
};

export default App;

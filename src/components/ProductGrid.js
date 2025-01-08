// src/components/ProductGrid.js
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="flex overflow-y-auto gap-1">
      {products && products.length > 0 && products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;

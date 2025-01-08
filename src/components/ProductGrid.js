// src/components/ProductGrid.js
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {products && products.length > 0 && products.map((product) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={product.id}> {/* Responsive width for each product card */}
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

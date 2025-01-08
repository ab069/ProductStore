// src/components/ProductGrid.js
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start" style={{ position:'relative', left:'10%',top:'35%'}} >
      {products && products.length > 0 && products.map((product) => (
        <div style={{width:'20%'}} className="col-3" key={product.id}> {/* Responsive width for each product card */}
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

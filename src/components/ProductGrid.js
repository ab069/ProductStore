import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="container">
      <div className="row">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              {/* Each product takes up 1/4 of the row on large screens */}
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;

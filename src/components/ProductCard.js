// src/components/ProductCard.js
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} style={{height:'100 px'}} className="w-32 h-32 object-cover mb-4" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

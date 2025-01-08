// src/components/CartSummary.js
import React from 'react';

const CartSummary = ({ cart, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Cart Summary</h2>
      <p>Total items: {cart.length}</p>
      <p>Total price: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>

      {cart.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} (x{item.quantity})</span>
                <div>
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartSummary;

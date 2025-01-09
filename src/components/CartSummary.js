import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {  removeFromCart, updateQuantity } from '../features/cart/cartSlice';
const CartSummary = () => {
  const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (productId) => {
      dispatch(removeFromCart(productId));
    };
  
    const handleIncreaseQuantity = (productId) => {
      const product = cart.find(item => item.id === productId);
      if (product) {
        dispatch(updateQuantity({ productId, quantity: product.quantity + 1 }));
      }
    };
  
    const handleDecreaseQuantity = (productId) => {
      const product = cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        dispatch(updateQuantity({ productId, quantity: product.quantity - 1 }));
      }
    };
  const handleCheckout = () => {
    alert('Checkout process started!');
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Cart Summary</h2>
      <p>Total items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
      
      {cart.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} (x{item.quantity})- ${ (item.price * item.quantity).toFixed(2)}</span>
                <div>
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-red-500 text-black px-2 me-3 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-green-500 text-black  me-3 px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-black px-2 py-1 rounded ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total price: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>

        </div>
      )}

      {/* Checkout Button */}
      <div className="mt-4">
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0} // Disable the button when cart is empty
          className={`px-4 py-2 rounded ${cart.length === 0 ? 'bg-gray-400' : 'bg-blue-500'} text-black`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;

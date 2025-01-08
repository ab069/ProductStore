// src/components/CartSummary.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/productStoreSlice';

const CartSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.productStore.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;

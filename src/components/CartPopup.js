// src/components/CartPopup.js
import React from 'react';

import CartSummary from './CartSummary';

const CartPopup = ({ cartItems, closePopup,cart,handleRemoveFromCart,handleIncreaseQuantity,handleDecreaseQuantity }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2); // Ensure two decimal places

  return (
    <div>
      <div
        className="cart-popup-overlay"
        onClick={closePopup} // Close the cart popup when clicking outside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      />
      <div
        className="cart-popup-content"
        style={{
          position: 'fixed',
          top: '20%',
          right: '5%',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          width: '300px',
          zIndex: 1001,
        }}
      >
        <CartSummary
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}/>
       
      </div>
    </div>
  );
};

export default CartPopup;

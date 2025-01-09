// src/components/CartPopup.js
import React from 'react';

const CartPopup = ({ cartItems, closePopup }) => {
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
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${ (item.price * item.quantity).toFixed(2) }
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>
            Total items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p>
            Total price: ${totalPrice} {/* Display the total price with two decimal places */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;

import React from 'react';

const CartIcon = ({ onAddToCart }) => (
  <button onClick={onAddToCart} className="cart-icon">
    🛒
  </button>
);

export default CartIcon;

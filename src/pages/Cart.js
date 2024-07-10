import React from 'react';
import Navbar from '../components/Navbar';

const Cart = ({ cartItems }) => (
  <div className="cart-page">
    <Navbar />
    <div className="cart-content">
      <h2 className='cart-title'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default Cart;


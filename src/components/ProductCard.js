import React from 'react';
import CartIcon from './CartIcon';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <CartIcon onAddToCart={() => onAddToCart(product)} />
  </div>
);

export default ProductCard;

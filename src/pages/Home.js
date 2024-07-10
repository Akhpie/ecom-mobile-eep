import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
];

const Home = ({ cart, setCart }) => {

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };


  return (
    <div className="home-page">
      <Navbar />
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;



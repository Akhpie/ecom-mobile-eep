import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Cart from './Cart';
import iphoneImage from '../assets/iphone 15 no bg.png'
import iphonePink from '../assets/iphone15pink.png'

const products = [
  { id: 1, name: 'Product 1', price: 10, image: iphoneImage },
  { id: 2, name: 'Product 2', price: 20, image: iphonePink },
  { id: 3, name: 'Product 2', price: 20, image: iphonePink },
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



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './styles.css';

const App = () => {
  const [cart, setCart] = React.useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

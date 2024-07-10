import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  const handleLogin = () => {
    // Add actual authentication here
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <h1 onClick={handleLogin} className='navbar-title'>Shop</h1>
      <div>
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

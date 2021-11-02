import React from 'react';
import KayakLogo from './../../assets/images/Logo.svg';
import './style.css';

const Header = () => {
  return (
    <nav className="bg-white border-bottom">
      <div className="logo">
        <a href="/">
          <img src={KayakLogo} alt="Kayak Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Header;

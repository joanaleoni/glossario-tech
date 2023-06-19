import React from 'react';
import logo from '../assets/image-logo.png';

function Header() {
  return (
    <header className="header" role="banner">
      <a href="/" className="header-logo-link">
        <div className="header-content">
          <img src={logo} alt="Logo" className="header-image" />
          <div className="header-text">
            <h1>Glossário<span>Tech</span>.</h1>
            <p>Tecnologia na ponta da língua.</p>
          </div>
        </div>
      </a>
    </header>
  );
}

export default Header;
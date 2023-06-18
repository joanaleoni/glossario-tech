import React from 'react';
import image from '../assets/image.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={image} alt="Imagem" className="header-image" />
        <div className="header-text">
          <h1>Glossário<span>Tech</span>.</h1>
          <p>Tecnologia na ponta da língua.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
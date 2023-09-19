import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuVisivel, setMenuVisivel] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisivel(!menuVisivel);
  };

  useEffect(() => {
    const verificarLargura = () => {
      if (window.innerWidth > 720) {
        setMenuVisivel(true);
      } else {
        setMenuVisivel(false);
      }
    };

    verificarLargura();

    window.addEventListener('resize', verificarLargura);

    return () => {
      window.removeEventListener('resize', verificarLargura);
    };
  }, []);

  const navClasses = `nav ${menuVisivel ? 'active' : ''}`;

  return (
    <div>
      <div className='box-top'></div>
      <header>
      <nav className={navClasses}>
        <div className="header-items">
          <Link to='/' className='icon'><img src='logo.png'/></Link>
          <div className="hamburguer" onClick={handleToggleMenu}>
            <div className='line-hamburguer'></div>
            <div className='line-hamburguer'></div>
            <div className='line-hamburguer'></div>
          </div>
        </div>
        <ul>
          <Link className='link' to='/about' onClick={handleToggleMenu}><p>Sobre</p></Link>
          <Link className='link' to='/services' onClick={handleToggleMenu}><p>Serviços</p></Link>
          <Link className='link' to='/contact' onClick={handleToggleMenu}><p>Contato</p></Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}

import React from 'react';
import logo from '../../assets/img/logo.png'
import './Menu.css'
// import ButtonLink from '../components/ButtonLink';
import { Button } from '../Button/index'

function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img src={logo} alt="logo anaflix" className="Logo"/> 
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
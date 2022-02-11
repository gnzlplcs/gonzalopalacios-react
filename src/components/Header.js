import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <Link className='clean-link' to='/'>
        <h1><span className="main-title">{title}</span></h1>
      </Link>
      <h2><span className='main-subtitle'>{subtitle}</span></h2>
    </header>
  );
}

export { Header };
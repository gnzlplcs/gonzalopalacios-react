import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <div className="brand-name">
        <Link className='clean-link' to='/'>
          <h1><span className="main-title">{title}</span></h1>
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export { Header };
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
       <ul className='nav nav-pills nav-fill'>
         <li className='nav-item'><Link to='/'>Home</Link></li>
         <li className='nav-item'><Link to='/about'>About</Link></li>
         <li className='nav-item'><Link to='/projects'>Projects</Link></li>
         <li className='nav-item'><Link to='/contact'>Contact</Link></li>
       </ul>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

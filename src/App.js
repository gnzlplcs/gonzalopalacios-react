import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link> |{" "}
        <Link to='/projects'>Projects</Link> |{" "}
        <Link to='/contact'>Contact</Link>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

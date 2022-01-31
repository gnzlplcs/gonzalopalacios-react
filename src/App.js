import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import './App.css'
import { Home } from './routes/Home';

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

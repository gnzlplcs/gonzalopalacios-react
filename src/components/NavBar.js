import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
       <ul>
         {/* <Link className="clean-link" to='/'><li>Home</li></Link> */}
         <Link className="clean-link" to='/about'><li>About</li></Link>
         <Link className="clean-link" to='/projects'><li>Projects</li></Link>
         <Link className="clean-link" to='/contact'><li>Contact</li></Link>
       </ul>
    </nav>
  );
}

export { NavBar };

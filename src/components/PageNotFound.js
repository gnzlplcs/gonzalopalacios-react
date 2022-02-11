import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImg from '../assets/images/Page_not_found_re_e9o6.png';

const PageNotFound = () => {
  return (
    <main>
      <img src={PageNotFoundImg} alt="Error 404 Page Not Found" />
      <Link to="/">Go to the home page</Link>
    </main>
  );
}

export { PageNotFound };

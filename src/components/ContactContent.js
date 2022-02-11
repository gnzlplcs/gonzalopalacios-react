import React from 'react';
import { CustomLink } from '../utilities/CustomLink';
import { Link } from 'react-router-dom';

const ContactContent = () => {
  return (
    <main>
      {/* it should be a form here */}
      <p>Send me a message: <CustomLink url="mailto:hello@gonzalopalacios.com" value="hello@gonzalopalacios.com"/></p>
      <p>My repos can be visited in my <CustomLink url="https://github.com/gnzlplcs" value="Github profile" />.</p>
      <Link to='/'>Go to the home page</Link>
    </main>
  );
}

export { ContactContent };

import React from 'react';
import { CustomLink } from '../utilities/CustomLink';

function Contact() {
  return (
    <main>
      <p>Send me a message: <CustomLink url="mailto:hello@gonzalopalacios.com" value="hello@gonzalopalacios.com"/></p>
      <p>My repos can be visited in my <CustomLink url="https://github.com/gnzlplcs" value="Github profile" />.</p>
    </main>
  )
}

export { Contact };
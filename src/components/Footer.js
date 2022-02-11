import React from 'react';
import { CustomImg } from '../utilities/CustomImg';
import { CustomLink } from '../utilities/CustomLink';
import facebookLogo from '../data/images/facebook-logo-96.png';
import instagramLogo from '../data/images/instagram-logo-96.png';
import twitterLogo from '../data/images/twitter-logo-96.png';

function Footer() {
  return (
    <footer>
      <div>
        <CustomLink
          url="https://facebook.com/gnzlplcs.webdev"
          value={
            <CustomImg
              src={facebookLogo}
              alt="Facebook Logo"
            />}
        />
        <CustomLink
          url="https://instagram.com/gnzlplcs.webdev"
          value={
            <CustomImg
              src={instagramLogo}
              alt="Instagram Logo"
            />}
        />
        <CustomLink
          url="https://twitter.com/gnzlplcs"
          value={
            <CustomImg
              src={twitterLogo}
              alt="Twitter Logo"
            />}
        />
      </div>
      <p>Build with <span role='img' aria-label='Bulb emoji'>💡</span> by <CustomLink url="https://twitter.com/gnzlplcs" value="@gnzlplcs" /></p>
    </footer>
  )
}

export { Footer };
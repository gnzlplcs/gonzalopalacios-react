import React from 'react';
import { CustomImg } from '../utilities/CustomImg';
import { CustomLink } from '../utilities/CustomLink';
import facebookLogo from '../assets/images/facebook-logo-36.png';
import githubLogo from '../assets/images/github-logo-36.png';
import instagramLogo from '../assets/images/instagram-logo-36.png';
import twitterLogo from '../assets/images/twitter-logo-36.png';

function Footer() {
  return (
    <footer>
      <div className='icons-area'>
        <CustomLink
          url="https://facebook.com/gnzlplcs.webdev"
          value={<CustomImg src={facebookLogo} alt="Facebook Logo" />}
        />
        <CustomLink
          url="https://github.com/gnzlplcs"
          value={<CustomImg src={githubLogo} alt="GitHub Logo"
            />}
        />
        <CustomLink
          url="https://instagram.com/gnzlplcs.webdev"
          value={<CustomImg src={instagramLogo} alt="Instagram Logo"
            />}
        />
        <CustomLink
          url="https://twitter.com/gnzlplcs"
          value={<CustomImg src={twitterLogo} alt="Twitter Logo"
            />}
        />
      </div>
      <p>Build with <span role='img' aria-label='Bulb emoji'>💡</span> by <CustomLink url="https://twitter.com/gnzlplcs" value="@gnzlplcs" /></p>
    </footer>
  );
}

export { Footer };
import React from 'react'
import { CustomImg } from '../utilities/CustomImg';
import HomeImg from '../assets/images/my-avatar.jpg'

const HomeContent = () => {
  return (
    <main className='homeContent'>
      <div>
        <h1>Hi there! I'm glad to see you here.</h1>
        <p>Welcome to my personal site. Hope you feel comfortable here. My name is Gonzalo, I'm a Web Frontend Developer.</p>
      </div>
      <div className='img-container'>
        <CustomImg
          src={HomeImg}
          alt="A Nature draw downloaded from undraw.co"
        />
      </div>
    </main>
  );
}

export { HomeContent };

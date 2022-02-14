import React from 'react'
import { CustomImg } from '../utilities/CustomImg';
import HomeImg from '../assets/images/my-avatar.jpg'

const HomeContent = () => {
  return (
    <main className='homeContent'>
      <h1>Welcome! I'm glad to see you here.</h1>
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

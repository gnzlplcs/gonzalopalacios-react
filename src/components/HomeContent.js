import React from 'react'
import { CustomImg } from '../utilities/CustomImg';
import HomeImg from '../assets/images/nature_m5ll.png'

const HomeContent = () => {
  return (
    <main className='homeContent'>
      <h1>Welcome! I'm glad to see you here.</h1>
      <CustomImg
        src={HomeImg}
        alt="A Nature draw downloaded from undraw.co"
      />
    </main>
  );
}

export { HomeContent };

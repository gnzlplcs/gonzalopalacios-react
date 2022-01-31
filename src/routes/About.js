import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main>
      <h2>About me</h2>
      <p>I'm Gonzalo. I'm a adult-apprentice programmer. Currently I'm studying a Web Backend Certificate, and I managed to earn a Web Frontend one. Both at <a href="https://byui.edu" target="_blank" rel="noopener noreferrer">BYU-I</a>.</p>
      <p>Many years ago, I studied Linguistics at university, so I love Grammar so much (Spanish Grammar, indeed).</p>
      <p>I know I've started late in this tech world, but I think it worst to not begin.</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </main>
  )
}

export { About };
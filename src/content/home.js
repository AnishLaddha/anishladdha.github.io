import React from 'react';
import gifImage from './comp.gif';

const HomeContent = () => {
  return (
    <div>
      <img src={gifImage} alt="Example GIF" />
      <h1>Hello, I'm Anish Laddha</h1>
      <h3>Above your tomb, the stars will belong to us.</h3>
      <a href="https://github.com/AnishLaddha/" target="_blank" rel="noopener noreferrer" class="hp-link"><i class="fa  fa-github-square" aria-hidden="true"></i></a>
      <a href="mailto:anishladdha03@gmail.com" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa  fa-envelope" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/AnishLaddha" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa   fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/AnishLaddha" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa fa-file-text" aria-hidden="true"></i></a>
    </div>
  );
};

export default HomeContent;

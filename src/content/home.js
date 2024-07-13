import React from 'react';
import gifImage from './comp.gif';

const HomeContent = () => {
  const quotes = [
    "Above your tomb, the stars will belong to us.",
    "You’re scared to win, scared to lose.\nI heard the war is over if you really choose",
    "Per aspera ad astra"
  ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div>
      <img src={gifImage} alt="Example GIF" />
      <h1>Hello, I'm Anish Laddha</h1>
      <h3 style={{whiteSpace: 'pre-line'}}>{randomQuote}</h3>
      <a href="https://github.com/AnishLaddha/" target="_blank" rel="noopener noreferrer" class="hp-link"><i class="fa  fa-github-square" aria-hidden="true"></i></a>
      <a href="mailto:anishladdha03@gmail.com" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa  fa-envelope" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/AnishLaddha" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa   fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/AnishLaddha" target="_blank" rel="noopener noreferrer" class="hp-link" ><i class="fa fa-file-text" aria-hidden="true"></i></a>
    </div>
  );
};

export default HomeContent;
// about.js
import React from 'react';
import meImg from './me.jpg'
const AboutContent = () => {
  return (
    <div className='about-content'>
      <h1>Hi, I'm Anish:</h1>
      <img class="me-img" src={meImg} alt="a picture of me" />
      <p>
        I am an <i>aspiring</i> Software Engineer from <a href="https://en.wikipedia.org/wiki/Fremont,_California" target="_blank" rel="noopener noreferrer" class="blue-link">Fremont, California <i class="fa fa-external-link" aria-hidden="true"></i></a>. I'm a rising senior at <div class="purdue-text">Purdue University</div> studying <a href="https://engineering.purdue.edu/ECE" target="_blank" rel="noopener noreferrer" class="blue-link">Computer Engineering <i class="fa fa-external-link" aria-hidden="true"></i></a>, with concentrations in Computer Systems and Artificial Intelligence/Machine Learning.
        This summer, I'm interning as a backend software engineer on the <a href="https://www.coinbase.com/blog/stablecoins-are-part-of-the-future-of-money-and-theyre-already-here" target="_blank" rel="noopener noreferrer" class="blue-link">Stablecoin Growth <i class="fa fa-external-link" aria-hidden="true"></i></a> team @ <div class="emphasis">Coinbase</div>. 
        In the past, I've done cool things as a software engineering intern at Visa.
        <br></br>
        <br></br>
        In the Spring of 2024, I was a Undergraduate TA for <a href="https://engineering.purdue.edu/ece270/" target="_blank" rel="noopener noreferrer" class="blue-link">ECE 270: Digital Systems Design <i class="fa fa-external-link" aria-hidden="true"></i></a>. This course is an introduction to digital logic design and hardware engineering with an emphasis on practical design techniques and circuit implementation. We did a lot of really fun work both on the breadboard and in SystemVerilog.
        <br></br>
        <br></br>
        This fall, I'll be working with the <a href="https://www.afrl.af.mil/" target="_blank" rel="noopener noreferrer" class="blue-link">Air Force Research Labratory <i class="fa fa-external-link" aria-hidden="true"></i></a> on a research project relating to ground target interception using robust, cyber-secure, unmanned aerial systems (drones).
      </p>
    </div>
  );
};

export default AboutContent;

// about.js
import React from 'react';
const AboutContent = () => {
  return (
    <div className='about-content'>
      <h1>Hi, I'm Anish:</h1>
      {/* <img class="me-img" src={meImg} alt="me" /> */}
      <p>
        I am an <i>aspiring</i> Software Engineer from Fremont, California. I'm a rising senior at <div class="purdue-text">Purdue University</div> studying <a href="https://engineering.purdue.edu/ECE" target="_blank" rel="noopener noreferrer" class="blue-link">Computer Engineering</a>, with concentrations in Artificial Intelligence/Machine Learning and Computer Systems.
        Right now, I'm really interested in systems programming and distributed systems.
        <br></br>
        <br></br>
        Current: <a href="https://www.coinbase.com/blog/stablecoins-are-part-of-the-future-of-money-and-theyre-already-here" target="_blank" rel="noopener noreferrer" class="blue-link">Stablecoins</a> @ Coinbase, (incoming) Drones @ AFRL<br></br>
        Previous: AI Infra/Security @ Visa
        <br></br>
        <br></br>
        Current (and near future) Reading:
        <ul>
          <li>Dune Messiah</li>
          <li>Effective C++</li>
          <li>The Kill Chain: Defending America in the Future of High-Tech Warfare</li>
        </ul>
        Would Recommend:
        <ul>
          <li>Dune</li>
          <li>Snow Crash</li>
          <li>Sapiens</li>
          <li>Superintelligence: Paths, Dangers, Strategies</li>
          <li>Life 3.0: Being Human in the Age of Artificial Intelligence</li>
          <li>The Great Gatsby</li>
          <li><a href='https://www.paulgraham.com/ds.html' target="_blank" rel="noopener noreferrer" class="blue-link">Do Things That Don't Scale</a></li>

        </ul>

      </p>
    </div>
  );
};

export default AboutContent;

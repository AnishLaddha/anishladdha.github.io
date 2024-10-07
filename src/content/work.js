import React from 'react';


const WorkContent = () => {
  return (
    <div className='work-content'>
    {/* <h1 class="w-head">Internships</h1>   */}
    <div className='we'>
      <h2>Coinbase - Summer 2024</h2>
      <h3>Software Engineer Intern</h3>
      <p class="work-desc">
      I'm spending this summer as a backend engineer on the <a href="https://www.coinbase.com/blog/stablecoins-are-part-of-the-future-of-money-and-theyre-already-here" target="_blank" rel="noopener noreferrer" class="blue-link">stablecoin growth<i class="fa fa-external-link" aria-hidden="true"></i></a> team, helping grow the market cap of stablecoins like $USDC. 🚀
      </p>
    </div>

    <div className='we'>
      <h2>Visa - Summer 2023</h2>
      <h3>Software Engineer Intern</h3>
      <p class="work-desc">
        During the summer of '23 I worked for the Artificial Intelligence Platform team out of Foster City, writing a program to optimize compute resources for Apache Spark jobs.
        I profiled their performance, then detected and squashed bottlenecks in resource (vram/vcore) allocations.
        <br></br>
        <br></br>
        I created a <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" class="blue-link">Grafana <i class="fa fa-external-link" aria-hidden="true"></i></a> dashboard, powered by a Flask + SQL backend, to visualize all the data that this process generated.
      </p>
    </div>

    <div className='we'>
      <h2>Visa - Summer 2022</h2>
      <h3>Software Engineer Intern</h3>
      <p class="work-desc">
        I was on the Release Engineering team based out of Austin, where I worked on security fixes for various in-house softwares developed by the test automation teams. I removed a ton of hard coded credentials and integrated a variety of tools to follow secret management best practices. I also modified code to protect against attacks like buffer overflows.
        <br></br>
      </p>
    </div>
    <a href="https://linkedin.com/in/AnishLaddha" target="_blank" rel="noopener noreferrer"><h2><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Resume</h2></a>

    
  </div>
  );
};

export default WorkContent;

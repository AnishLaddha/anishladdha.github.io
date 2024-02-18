// Content.js
import React from 'react';
import HomeContent from './content/home';
import AboutContent from './content/about';
import WorkContent from './content/work';
import ProjectsContent from './content/projects';
import ThoughtsContent from './content/thoughts';
import ContactContent from './content/contact';

import './content/content-styles.css';


// Define content for each character
const contentMap = {
  W: <HomeContent />,
  A: <AboutContent />,
  B: <WorkContent />,
  C: <ProjectsContent />,
  D: <ThoughtsContent />,
  E: <ContactContent />
};

const Content = ({ selected }) => {
  return (
    <div className="content">
      {contentMap[selected]}
    </div>
  );
};

export default Content;

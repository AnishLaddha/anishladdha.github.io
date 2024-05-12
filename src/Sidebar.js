// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState('W');

  const handleSelect = (char) => {
    setSelected(char);
    onSelect(char);
  };

  return (
    <div className="sidebar">
      <div className={`sb3 ${selected === 'W' ? 'selected' : ''}`} onClick={() => handleSelect('W')}>Home</div>
      <div className={`sb3 ${selected === 'A' ? 'selected' : ''}`} onClick={() => handleSelect('A')}>About</div>
      <div className={`sb3 ${selected === 'B' ? 'selected' : ''}`} onClick={() => handleSelect('B')}>Work</div>
      <div className={`sb3 ${selected === 'C' ? 'selected' : ''}`} onClick={() => handleSelect('C')}>Projects</div>
      {/* <div className={`sb3 ${selected === 'D' ? 'selected' : ''}`} onClick={() => handleSelect('D')}>Thoughts</div> */}
      <div className={`sb3 ${selected === 'E' ? 'selected' : ''}`} onClick={() => handleSelect('E')}>Contact</div>
    </div>
  );
};

export default Sidebar;

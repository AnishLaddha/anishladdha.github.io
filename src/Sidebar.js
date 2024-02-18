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
      <div className={selected === 'W' ? 'selected' : ''} onClick={() => handleSelect('W')}>Home</div>
      <div className={selected === 'A' ? 'selected' : ''} onClick={() => handleSelect('A')}>About</div>
      <div className={selected === 'B' ? 'selected' : ''} onClick={() => handleSelect('B')}>Work</div>
      <div className={selected === 'C' ? 'selected' : ''} onClick={() => handleSelect('C')}>Projects</div>
      <div className={selected === 'D' ? 'selected' : ''} onClick={() => handleSelect('D')}>Thoughts</div>
      <div className={selected === 'E' ? 'selected' : ''} onClick={() => handleSelect('E')}>Contact</div>
    </div>
  );
};

export default Sidebar;

// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

function App() {
  const [selected, setSelected] = useState('W');

  const handleSelect = (char) => {
    setSelected(char);
  };

  return (
    <div className="app">
      <Sidebar onSelect={handleSelect} />
      <Content selected={selected} />
    </div>
  );
}

export default App;

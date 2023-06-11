import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import './App.css';

function App() {
  const [textStyle, setTextStyle] = useState({ color: '#000000' });
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTextStyle({ color: randomColor });
    setShowText(true);
  };

  return (
    <div className="container">
      <nav className="menu-bar">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="menu">
          <li className="menu-item">
            <button className="menu-link">Home</button>
          </li>
          <li className="menu-item">
            <button className="menu-link">About</button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1 className="animated" style={textStyle}>
          Hello, World!
        </h1>
        <button className="btn" onClick={handleClick}>
          Hello world
        </button>
        <CSSTransition in={showText} timeout={500} classNames="fade" unmountOnExit>
          <h1 className="animated" style={textStyle}>
            Hello, World!
          </h1>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;

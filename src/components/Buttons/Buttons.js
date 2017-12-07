import React from 'react';
import './Buttons.css';


const Buttons = ({sayWord, flipCard, prevCard, nextCard}) => {
  return (
    <div className="flex-buttons">
      <button className="btn blue sayWord" onClick={sayWord}>
        <span>Say</span>
      </button>
      <button className="btn orange flipCard" onClick={flipCard}>
        <span>Flip</span>
      </button>
      <button className="btn red flipCard" onClick={prevCard}>
        <span>Previous</span>
      </button>
      <button className="btn nextCard" onClick={nextCard}>
        <span>Next</span>
      </button>
    </div>
  )
}

export default Buttons;

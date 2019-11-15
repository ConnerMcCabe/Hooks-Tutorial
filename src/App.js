import React, { useState } from 'react';
import './App.css';



export default function Button() {
  const [buttonText, setButtonText] = useState('Click me, plz');

  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }
  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  )
};

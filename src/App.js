import React, { useState } from 'react';
import './App.css';



export default function Button() {
  const [buttonText, setButtonText] = useState('Click me, plz');

  return (
    <button onClick={ () => setButtonText("Thanks, been clicked")}>
      {buttonText}
    </button>
  )
};

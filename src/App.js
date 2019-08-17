import React, { useState } from 'react';
import { doubleNumber } from './helperFunctions'
import './App.css';

function App() {
  const [numberDisplay, setNumberDisplay] = useState('1');

  return (
    <div className="App jumbotron">
      <h1>React Doubler</h1>
      <h2 className="numberDisplay" data-testid="numberDisplay">{numberDisplay}</h2>
      <div className="btn-container">
        <button id="doubler-btn" className="btn btn-primary" onClick={() => setNumberDisplay(doubleNumber(numberDisplay))}>
          Doubler
        </button>
      </div>
    </div>
  );
}

export default App;

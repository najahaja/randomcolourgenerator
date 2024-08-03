import React, { useState } from 'react';
import './App.css';

function App() {
 
const randomcolour=()=>{
 const  letter="0123456789ABCDEF"
  let colour="#"
  for(let i=0;i<6;i++){
    colour+=letter[Math.floor(Math.random() * 16)]

  } return colour
}
const[colour,setColour]=useState(randomcolour())
const generateColour=()=>{
  setColour(randomcolour())
}
  return (
    <div >
      <div className="App" style={{backgroundColor: colour}}>
        <div className="App-header">
          <h1>Random Colour Generator</h1>
          <div className="colorinfo">
            <p>Current Colour is: {colour}</p>
          </div>
          <div className="btn">
            <button onClick={generateColour}>Generate Colour</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

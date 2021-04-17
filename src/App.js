import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(45); // want to pass number=45 to Child component
                                         // but App.js don't have Child component, It has Parent component
                                         // and Parent component has Child
                                         // so We pass num={number} in Parent here 
                                         // and Parent will pass num={propos.num} to Child
                                         
  return (
    <div >
      Hello WOrld 
      <Parent num={number}></Parent>
      <button onClick={()=>{setNumber(++number)}}>Update Number</button>
      <button onClick={()=>{setNumber(--number)}}>Decrease Number</button>
    </div>
  );
}

export default App;

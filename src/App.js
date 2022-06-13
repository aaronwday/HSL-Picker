import { useState } from "react";
import './App.css';
import Square from "./Square";

function App() {
  const [H, setH]= useState(275);
  const [S, setS]= useState(50);
  const [L, setL]= useState(50);
  

  function handleHChange(e) {
    setH(e.target.value)
  }
  function handleSChange(e) {
    setS(e.target.value)
  }
  function handleLChange(e) {
    setL(e.target.value)
  }
  

  return (
    <div className="App">
        <p>
         <code className="title">Aaron Day's HSL Picker</code>
         </p>
         <Square H={H} S={S} L={L}/>
    
        <input className="sliderH" type="range"
        min="0" 
        max="350"
        value={H} 
        onChange={handleHChange}
        />H
        
        <p></p>
        <input className="sliderS" type="range" 
        min="0" 
        max="100"
        value={S}
        onChange={handleSChange}
        />S
        <p></p>
        <input className="sliderL" type="range" 
        min="0"
         max="100"
         value={L}
         onChange={handleLChange}
         />L
        
       
        
       
        </div>

      
  );

}

export default App;

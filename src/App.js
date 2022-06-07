import { useState } from "react";
import './App.css';
import Square from "./Square";

function App() {
  const [H, setH]= useState(100);
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
         <code>Aaron Day's HSL Picker</code>
         </p>
        H<input type="range" 
        min="0" 
        max="350"
        value={H}
        onChange={handleHChange}
        />
        S<input type="range" 
        min="0" 
        max="100"
        value={S}
        onChange={handleSChange}
        />
        L<input type="range" 
        min="0"
         max="100"
         value={L}
         onChange={handleLChange}
         />
       
        <Square H={H} S={S} L={L}/>
       
        </div>

      
  );

}

export default App;

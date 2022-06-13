import { useState, useEffect } from "react";
import './App.css';
import Square from "./Square";

function App() {
  function HSLToHex(h,s,l) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0, 
        b = 0; 
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  function HSLToRGB(h,s,l) {

    s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;  
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  const [H, setH]= useState(275);
  const [S, setS]= useState(50);
  const [L, setL]= useState(50);
  const [RGB, setRGB] = useState(60);
  const [Hex, setHex] = useState(60);

  function handleHChange(e) {
  
  if (e.target.value >= 0 && e.target.value <= 350) {
      setH(e.target.value)
  }
}

    function handleSChange(e) {
  if (e.target.value >= 0 && e.target.value <= 100) {
      setS(e.target.value)
    }
  }

    function handleLChange(e) {
  if (e.target.value >= 0 && e.target.value <= 100) {
    setL(e.target.value)
  }
    
}

useEffect(() => {
  const calculateRGBvalue=HSLToRGB(H,S,L)
  setRGB(calculateRGBvalue)
  const calculateHexValue=HSLToHex(H,S,L)
  setHex(calculateHexValue)


}, [H,S,L])
  

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

       <input className="sliderH" type="number"
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

       <input className="sliderS" type="number"
        min="0" 
        max="350"
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

       <input className="sliderH" type="number"
        min="0" 
        max="350"
        value={L} 
        onChange={handleLChange}
        />L   
        
       <div>{RGB}</div>
       <div>{Hex}</div>
        
       
        </div>
        

      
  );

}

export default App;

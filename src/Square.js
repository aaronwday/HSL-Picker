import React from 'react'


export default function Square({H, S, L}) {
  return (
    <div>
         <div className="square" style={{ backgroundColor: "hsl(" + H + "," + S + "%," + L + "%)"}}></div>
         
 <div className="Variables">H : {H} S : {S}% L : {L}%</div>
    </div>
  )
}

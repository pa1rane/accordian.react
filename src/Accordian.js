import React, { useState } from 'react';
import data from "../src/data.json";

const Accordian = ({visibleId, handleVisibility}) => {

  return (
    <div>
      {
        data.map((card, index) => (
           <div key={index}>
            <h3>{card.title}</h3>
            <p style={{display : (visibleId === card.id ? "block" : "none")}}>{card.content}</p>
            <button onClick={() => handleVisibility(card.id)}>Open</button>
            </div>
        ))
      }
    </div>
  )
}

export default Accordian

import React, { useState } from 'react';
import Accordian from './Accordian';

const App = () => {

  const [visibleId, setVisibleId] = useState(null);
  const [input, setInput] = useState(false);

  const handleVisibility = (id) => {
    if (visibleId === id) {
      setVisibleId(null)
    } else {
      setVisibleId(id)
    }
  }

  return (
    <div>
      <h1>Accordians</h1>
      <h3>Is multiple open accordion allowed?
        <input type="checkbox" checked={input} onClick={() => setInput(!input)}/>
      </h3>
      <Accordian visibleId={visibleId} handleVisibility={handleVisibility}/>
    </div>
  )
}

export default App

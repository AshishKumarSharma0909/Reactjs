import React, { useState } from 'react'

const Counterapp = () => {
  const [counter , setCounter] = useState(10)
  function handleinc(){
    setCounter(counter+1)
  }

  function handledec(){
    setCounter(counter-1)
  }
  function handleres(){
    setCounter (10)
  }
  return (
    <div id="counterparent">
     <div id="counterchild">
        <p id="counterheading">Counter Application</p>
        <p id="counterdigit">{counter}</p>
        <button id="buttoninc" onClick={handleinc}>Increment</button>
        <br/>
        <button id="buttondec" onClick={handledec}>Decrement</button>
        <br />
        <button id="buttonres" onClick={handleres}>Restart</button>
     </div>
    </div>
  )
}

export default Counterapp
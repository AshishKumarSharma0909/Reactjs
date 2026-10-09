import React, { useState } from 'react'

const Backgroudchange = () => {
    const [background, setBackground] = useState("white")
     function handle1() { setBackground("red") }
      function handle2() { setBackground("blue") }
       function handle3() { setBackground("green") }
        function handle4() { setBackground("orange") }
  return (
    <div id="backparent" style={{ backgroundColor: background }}>
     <div id="backchild">
        <p id="backheading">Backgroud Change</p>
    
            <button id="button1" onClick={handle1}>button 1</button>
         <button id="button2" onClick={handle2}>button 2</button>
         <button id="button3" onClick={handle3}>button 3</button>
        <button id="button4" onClick={handle4}>button 4</button>
     </div>
    </div>
  
    
  )
}

export default Backgroudchange
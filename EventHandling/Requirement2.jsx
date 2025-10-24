import React from 'react'

function Requirement2() {
    let handleClick=(content)=>{
        alert(`Welcome to ${content}`)

    }
  return (
    <center>
          <button onClick={()=>handleClick("React")}>React</button>
          <button onClick={()=>handleClick("Angular")}>Angular</button>
          <button onClick={()=>handleClick("JavaScript")}>Javascript</button>
   </center>
  )
}

export default Requirement2
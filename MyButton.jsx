import React from 'react'

function MyButton() {
    let handleClick=(content)=>{
        alert(`Hello ${content}`)
    }
  return (
    <div>
        <h1>Example for Event Binding</h1>
        <button onClick={()=>handleClick("Javascript")}>Click here</button>
    </div>
  )
}

export default MyButton
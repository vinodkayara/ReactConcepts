import React, { useState } from 'react'

function MyInput() {
    const[text,setText]=useState('')
    let handleChange=(event)=>{
        setText(event.target.value)

    }
  return (
    <div>
        <h1>Example for useState in events</h1>
        <input type="text" placeholder='enter the text here' 
        onChange={handleChange}/>
        <p>The contet:{text}</p>

    </div>
  )
}

export default MyInput

import React, { useState } from 'react'

function Requirement4() {
      const[text,setText]=useState('')
        let handleChange1=(event)=>{
            setText(event.target.value)
        }
        const[text1,setText1]=useState('')
        let handleChange2=(event)=>{
            setText1(event.target.value)
        }
        const[text2,setText3]=useState('')
        let handleChange3=(event)=>{
            setText3(event.target.value)
        }
        const[text4,setText4]=useState('')
        let handleChange4=(event)=>{
            setText4(event.target.value)
        }
  return (
    <center>
        <p>My Name:{text}</p>
        <p>My  age:{text1}</p>
        <p>I am From:{text2}</p>
        <p>Skills:{text4}</p>
        Name  
        <input type="text" name="" placeholder='enter the text here' 
        onChange={handleChange1}/> <br />
        Age
         <input type="text1" name="" placeholder='enter the text here' 
        onChange={handleChange2}/> <br />
        Location
         <input type="text2"  name="" p laceholder='enter the text here' 
        onChange={handleChange3}/> <br />
        Skills
         <input type="text4" placeholder='enter the text here' 
        onChange={handleChange4}/>
        
    </center>
  )
}

export default Requirement4
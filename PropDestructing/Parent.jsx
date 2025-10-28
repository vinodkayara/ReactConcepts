import React from 'react'
import Child from '../Props/Child'

function Parent() {
    let handleClick=()=>{
        alert("hello good afternoon")
    }
  return (
    <div>
           <h1>Parent Component</h1>
           <Child click={handleClick}/>
    </div>
  )
}

export default Parent
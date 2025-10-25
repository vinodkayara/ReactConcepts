import React from 'react'
import Child from './Child'

function Parent() {
    let name="Raj"
    let age=40
  return (
    <div style={{textAlign:"center",
        width:'300px',boxShadow:"0px 0px 10px black",
        padding:"10px",margin:"50px auto"
    }}>
      <h1>Parent Component</h1>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
      <Child name={name} age={age} condition={false}/>
        <Child name="Riya" age={30} condition={true}/>
    </div>
  )
}

export default Parent
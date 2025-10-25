import React from 'react'

function Child(props) {
  return (
    <div style={{textAlign:"center",
        width:'200px',boxShadow:"0px 0px 10px black",
        padding:"10px",margin:"auto"
    }}>
      <h3>Child Component</h3>
      <p>My name is {props.name}</p>
      <p>I am {props.age} years old</p>
     {props.condition? <p>is student</p> : <p>is not student</p>}
    </div>
  )
}

export default Child
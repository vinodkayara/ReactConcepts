import React from 'react'

function Child(props) {
    const{name="stranger",age="NA"}=props
  return (
    <div style={{textAlign:"center",
        width:'200px',boxShadow:"0px 0px 10px black",
        padding:"10px",margin:"auto"
    }}>
      <h3>Child Component</h3>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
     {props.condition? <p>is student</p> : <p>is not student</p>}
    </div>
  )
}

export default Child
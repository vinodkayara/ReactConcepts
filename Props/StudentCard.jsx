import React from 'react'

function StudentCard(props) {
  return (
    <div style={{textAlign:"center",
        width:'300px',boxShadow:"0px 0px 10px black",
        padding:"10px",margin:"auto",
        
  
    }}>
      <h3>Child Component</h3>
      <p>Name:{props.name}</p>
      <p>Skill: {props.skill} </p>
     {props.condition? <p>Yes</p> : <p>NO</p>}
    </div>
  )
}

export default StudentCard
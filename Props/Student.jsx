import React from 'react'
import './StudentCard'
import StudentCard from './StudentCard'

function Student() {
    let name="Raj"
    let skill="React"
    let placed="Yes"
  return (
    <div style={{textAlign:"center",
        width:'500px',boxShadow:"0px 0px 10px black",
        padding:"10px",margin:"50px auto",

    }}>
      <h1>Student Profile</h1>
      {/* <p>Name :{name}</p>
      <p>Skill: {skill}</p>
      <p>Placed : {placed}</p> */}
      <StudentCard name={name} Skill= {skill} Placed={placed}  condition={false}/>
        <StudentCard name="Riya" skill="java" condition={true}/>
         <StudentCard name="Chida" skill="Python" condition={true}/>
          <StudentCard name="Virat" skill="MERN" condition={true}/>
    </div>
  )
}

export default Student
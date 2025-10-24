import React from 'react'

function MyForm() {
    let handleSubmit=(event)=>{
        event.preventDefault()
        alert("Form submit submited successfully")
    }
  return (
    <div>
     <h1>Example for Default behaviour</h1>
     <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter the name' />
        <input type="Submit" />
     </form>
     </div>
  )
}

export default MyForm
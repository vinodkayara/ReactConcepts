import React from 'react'

function Requiremnet3() {
    let handleSubmit=(event)=>{
          event.preventDefault()
        alert("Logged In successfully")

    }
  return (
    <center>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor=""> Username</label>
          <input type="text" /> <br />
            <label htmlFor="'"> Password</label>
            <input type="password" />
            <br />
            <button >Login</button>

        </form>
    </center>
  )
}

export default Requiremnet3
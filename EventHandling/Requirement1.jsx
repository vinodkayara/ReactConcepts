import React from 'react'
import './req.css'


function Requirement1() {
     let handleSubmit=(event)=>{
        event.preventDefault()
        alert("Item added to cart successfully!!")
    }
  return (
    <center className='main'>
          <div className='one'>
            <img src="vite.svg" alt="img" /> <br />
            <p>Image</p> <br />
            <p>Price: 100/-</p>
           <button onClick={handleSubmit}>Add to Cart</button>
          </div>

          <div className='one'>
            <img src="react.svg" alt="img" /> <br />
            <p>Image</p> <br />
            <p>Price: 100/-</p>
           <button onClick={handleSubmit}>Add to Cart</button>
          </div>
    </center>
  )
}

export default Requirement1
import React from 'react'

function Example1({condition,name}) {
    if(condition){
        return (
            <>
             <h1>Welcome user{name}</h1>
            </>
   
  )
    }else{
        return <h1>Please Login</h1>
    }
  
}

export default Example1
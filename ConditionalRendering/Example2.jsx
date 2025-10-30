import React from 'react'
import Success from './Succ'
import Error from './Error'
function Example2({condition}) {
 if(condition){
return <Success/>
 }
 else{
return <Error/>
 }
}

export default Example2
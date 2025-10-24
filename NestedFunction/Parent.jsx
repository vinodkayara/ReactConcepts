import React from 'react'

function Parent() {
  return (
    <div style={{height:"500px",width:"500px", textAlign:"center", boxShadow:"0px 0px 10px black" ,margin:"100px auto"
    }}>
        <h3>Parent component</h3>
        <Child/>
    </div>
  )
}

function Child() {
  return (
    <div style={{height:"300px",width:"300px", textAlign:"center", boxShadow:"0px 0px 10px black" ,margin:"0 auto"
    }}>
        <h3>Child  component</h3>
    </div>
  )
}

export default Parent
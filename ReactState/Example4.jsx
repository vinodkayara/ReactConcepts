import React, { Component } from 'react'

 class Example4 extends Component {
    constructor(){
        super()
        this.state={
            count:10
        }
    }
    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
   Decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
     Reset(){
        this.setState({
            count:0
        })
    }
    
  render() {
    return (
      <div style={{margin:"50px auto",textAlign:"center"}}>
        <h1>Counter App</h1>
        <h3>The count value is : {this.state.count}</h3>
        <button onClick={()=>this.Increment()}>Increment</button>
        <button onClick={()=>this.Reset()}>Reset</button>
        <button onClick={()=>this.Decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Example4       
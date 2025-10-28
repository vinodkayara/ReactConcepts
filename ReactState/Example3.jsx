import React, { Component } from 'react'

 class Example3 extends Component {
    constructor(){
        super()
        this.state={
            message:"Welcome to react js class",
            name:"Raj",
            age:30,
            city:"Bangalore",
            condition:true
        }
    }
    HandleChange(){
        this.setState(
            {
            message:"Thank you for visiting",
            name:"Virat",
            age:22,
            city:"Mysore",
            condition:false
        }
        )
    }
  render() {
    return (
      <div>
        <h1>Example for Defining State</h1>
        <h3>{this.state.message}</h3>
        <p>My name is {this.state.name}</p>
        <p>I am {this.state.age} years old</p>
        <p>I am from {this.state.city}</p>
        {this.state.condition?<h1>
            Not a student </h1>:<h1>Is Student</h1>}
            <button onClick={()=>this.HandleChange()}>Change</button>
      </div>
    )
  }
}
export default Example3
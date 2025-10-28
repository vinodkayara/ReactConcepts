import React, { Component } from 'react'

export default class exanple1 extends Component {
    constructor(){
        super()
        this.state={
            message:"welcom to React js class",
            name: "vinod",
            age:22,
            city:"Banglore"
        }
    }
  render() {
    return (
      <div>
        <h1>Example for defining state</h1>
        <h3>{this.state.message}</h3>
        <p>My name is {this.state.name}</p>
        <p>I am {this.state.age} years old</p>
        <p>I am from {this.state.city}</p>
      </div>
    )
  }
}

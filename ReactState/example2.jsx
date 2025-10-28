import React, { Component } from 'react'

export default class example2 extends Component {
    constructor(){
        super()
        this.state={
            message:"wwlcome to react JS class",
            name:"Vinod",
            age:"22",
            city:"Bengaluru"
        }
    }
  render() {
    return (
      <div>
            <h1>This class component for state Example</h1>
            <h2>My Name is {this.state.name}</h2>
         
      </div>
    )
  }
}

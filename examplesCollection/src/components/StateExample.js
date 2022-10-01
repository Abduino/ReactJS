import React, { Component } from "react";

class StateExample extends Component{
    constructor(){
        super()
            this.state={
                message:"Not Clicked"
            }
        
    }
    changeState(){
        this.setState({
            message: this.state.message + "Clicked"
        })
    }
    render(){
        return(
            <div>
                <hr/>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>Click Me</button> 
            </div>
        )
    }
}
export default StateExample
import React, { Component } from "react";

class StateExample2 extends Component{
    constructor(){
        super()
            this.state={
                count: 0
            }
        
    }
    changeState(){
        this.setState({
            count: count + 1
        })
    }
    render(){
        return(
            <div>
                <hr/>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.changeState()}>Click Me</button> 
            </div>
        )
    }
}
export default StateExample2
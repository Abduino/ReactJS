import React, { Component } from "react";

class StateExample2 extends Component{
    constructor(props){
        super(props)
            this.state={
                count: 0
            }
        
    }
    changeState(){
        this.setState({
            count: this.state.count + 1

        }) 
        
    }
    render(){
        return(
            <div>
                <hr/>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => this.changeState()}>Click Me</button> 
            </div>
        )
    }
}
export default StateExample2
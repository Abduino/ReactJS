import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            parentName : 'Parent'
        }
        this.alerHandler = this.alerHandler.bind(this)
    }
    
    alerHandler(){
        alert("hello parent")
    }
    render(){
        return (
            <div>
                <hr/>
                <h2>parent page</h2>
                <ChildComponent funName= {this.alerHandler}/>
                <hr/>
                
            </div>
        )
}
}

export default ParentComponent
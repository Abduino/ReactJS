import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor (props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    }
    render() {  
        let message
        if(this.state.isLoggedIn){
            message = <div>Wellcome Abdure</div>
        }
        else{
            message =<div>Wellcome Gust</div>
        }
        return <div>{message}</div>
    }
}

export default ConditionalRendering
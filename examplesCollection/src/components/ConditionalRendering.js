import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor (props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return(
                <div>
                    <hr/>
                    <div>Wellcome Abdure</div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <hr/>
                    <div>Wellcome Gust</div>
                </div>
            )
        }
    }
}

export default ConditionalRendering
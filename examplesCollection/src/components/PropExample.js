import React from "react";
import { Component } from "react";

//props example with class component (statefull component)

/* class UserName extends Component{
    render(props){
        return(
            <div>
                <h2>The user name is {this.props.name}</h2>
            </div>
        )
    }
}
export default UserName */

//props example with function component (staeless component)
const UserName = (props) =>{
   /*  const name = props */
    return(
        <div>
            <hr/>
            <h2>The user name is {props.name}</h2>
        </div>

    )
}
export default UserName
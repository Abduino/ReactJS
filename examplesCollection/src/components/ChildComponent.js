import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={props.alerHandler}>Click</button>
            
        </div>
    )
}

export default ChildComponent;
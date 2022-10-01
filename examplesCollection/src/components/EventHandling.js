import React from "react";

function EventHandling(){
    function eventHandler(){
        console.log("clicked")
    }
    return(
        <div>
            <hr/>
            <h2> Event Handler Example</h2>
            <button onClick={eventHandler}>Click Me</button>
        </div>
    )
}
export default EventHandling
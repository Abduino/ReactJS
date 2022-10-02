import React from "react";

function ListRendering(){
    const users = ["abdre","redi",30,]
    const user = users.map(user => <h2>{user}</h2>)
    return(
        <div> {user}</div>
/*{             <h2>{users[0]}</h2>
            <h2>{users[1]}</h2>
            <h2>{users[2]}</h2> */
/*             {
                users.map(user => <h2>go{user}</h2>)
            }
        </div> */
    )
}
export default ListRendering
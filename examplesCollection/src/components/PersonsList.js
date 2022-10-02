import React from "react";
function PersonsList (){
    const drivers=[
        {
            id:1023,
            fname:"abdre",
            lname:"redi"
        },
        {
            id:1024,
            fname:"khalid",
            lname:"ebrahim"

        },{
            id:1025,
            fname:"ferhan",
            lname:"abdu"
        }
    ]
    const driverInfo = drivers.map(driver => <h6>Driver ID = {driver.id} And First Name {driver.fname} And Last Name {driver.lname}</h6>)
    return(
        <div>
            <hr/>
            <div>{driverInfo}</div>
            <hr/>
            {
                drivers.map(driver => <p>Driver ID = {driver.id} And First Name {driver.fname} And Last Name {driver.lname}</p>)
            }
            <hr/>
            <table cellSpacing={5} cellPadding={5}>
                <tr>
                    <th>ID</th>
                    <th>F_Name </th>
                    <th>L_Name </th>
                </tr>
               
                    {drivers.map(driver => <tr><td>{driver.id}</td> <td>{driver.fname}</td>  <td>{driver.lname}</td></tr>)}
               
            </table>

        </div>
        
    )
}
export default PersonsList
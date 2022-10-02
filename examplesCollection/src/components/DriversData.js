import React from "react";

function DriversData({driver}){
    return(
    <div>
        <table align="center" cellPadding={5} cellSpacing={5}>
            <tr>
                <td>{driver.id} </td>
                <td>{driver.fname}</td>
                <td>{driver.lname}</td>
            </tr>
        </table>
    </div>
    )
}
export default DriversData
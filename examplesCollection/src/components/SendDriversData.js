import React from "react";
import DriversData from "./DriversData";
function SendDriversData (){
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
  const passDriverData = drivers.map(driver => <DriversData driver={driver}/>)
    return (
    <div>
        <p>passing and displaying data</p>
        <div>{passDriverData}</div>
      
    </div>
    )
}
export default SendDriversData
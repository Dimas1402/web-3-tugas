import React from "react"
import "../Components/RightBar.css"
import Calendar from "react-calendar"

const RightBar =() =>{
    return(
<div className="box-div">
<div className="box">
    <div className="calendar">
    <Calendar/>
    </div>

</div>
</div>
    )
}

export default RightBar;
import React from "react";

function Task(Props){
    return(
        <div>
            <input type="checkbox"defaultChecked={Props.completed}/>
            <span>{Props.text}</span>
        </div>
    )
}
export default Task;
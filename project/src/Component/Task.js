import react from 'react';

function Task (props){  
    return(
        <div>
            <input type = "checkbox" defaultChecked={props.completed}/>
            <span>{props.text}</span>
        </div>
    );

}
export default Task;
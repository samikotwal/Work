import React,{useContext} from "react";
import App,{Mycontext} from "../App"

const ChildC = () => {
    const contextValue = useContext(Mycontext);

    return(
        <div>
            <h3>Hello sami</h3>
            <p>{contextValue}</p>
        </div>
    )
}
export default ChildC
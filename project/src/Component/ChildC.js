import React, { useContext } from "react";
import { Mycontext } from "../App";

const ChildC = () => {

    const contextValue = useContext(Mycontext)

    return(
        <div>
            <h3>ChildC</h3>
            <p>{contextValue}</p>
        </div>
    )
}

export default ChildC
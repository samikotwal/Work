import React from "react";
import Counter from "./Component/Counter";
/*import Task from "./Component/Task";*/

/*function App(){
  return(
    <div>
      <h1>My-Do List</h1>
      <Task text = "Buy groceries" completed = {false}/>
      <Task text = "Go a run" completed = {true}/>
      <Task text = "Hello" completed = {false}/>
    </div>
  );
}*/


export default App;

function App(){
  return(
    <div>
      <Counter/>
    </div>
  );
}
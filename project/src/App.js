//import React,{createContext} from "react";
//import ChildA from "./Component/ChildA";
import React from "react"
import Counter from "./Component/Counter"

/*function App(){
  return(
    <div>
      <Task text="by graocer" completed={false}/>
      <Task text="by graocer" completed={true}/>
      <Task text="by graocer" completed={false}/>
    </div>
  )
}*/
function App(){
  return(
    <div>
      <Counter/>
    </div>
  )
}

/*export const Mycontext = createContext();
const App = () => {
  const contextValue = "Hello from context"
  return(
    <Mycontext.Provider value={contextValue}>
      <ChildA/>
    </Mycontext.Provider>
  );
}*/

export default App;



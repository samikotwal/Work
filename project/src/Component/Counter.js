import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>increment</button> 
                <button onClick={this.decrement}>decrement</button> 
            </div>
        );
    }

}
export default Counter;
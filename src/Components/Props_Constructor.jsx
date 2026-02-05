import React, { Component } from "react";

class PropsConstructor extends Component {
    constructor(props) {
        super(props);
        //state Object
        this.state = {
            //simple
            model: "BMW",           
            count: 0 
        }
       
    }
     changeState = () => {
        this.setState({
            name: "Hello",
        })
    }

    increment = () => {
        this.setState((add) => ({
            count: add.count + 1,
        }));
    }
    
    render() {
        return (
            <>
                <h3>Props in the Constructor</h3>

                {/* simple */}
                <p>I have {this.state.model}</p>

                <button onClick={this.changeState}>Click</button>
                <span>Updated: {this.state.name}</span>
                <br />
                <button onClick={this.increment}>Increment</button>
                <span>Count: {this.state.count}</span>
            
            </>
        )
    }
}

export default PropsConstructor
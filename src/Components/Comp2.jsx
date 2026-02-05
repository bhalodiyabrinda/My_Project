import React, { Component } from "react";
import Component1 from "./Comp1";

class Component2 extends Component {
    render() {
        return (
            <>
                <h3>Components in Components</h3>
                <p>This is Component2</p>
                <Component1 />
            </>
        );
    }
}

export default Component2;

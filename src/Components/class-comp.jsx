import React, { Component } from "react";

class ClassComp extends Component {
    // constructor
    constructor() {
        super();
        this.state = { color: 'red' };
    }     

    render() {
        // count { name } = this.props;
        return (
            <> 
                <h3>Class Component: </h3>

                {/* constructor */}
                <p>I am a {this.state.color} Car!</p>
                <p>I am a {this.props.color} Car!</p>

            </>
        );
    }
}

export default ClassComp;
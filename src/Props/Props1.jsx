import React from "react";

function Props1(props) {

    // Destructuring Props
    const { Fname, Lname } = props;

    return (
        <> 
            {/* Props */}
            <p>I am a {props.brand}!</p>

            {/* Pass Multiple Properties */}
            <p>I am a {props.color} {props.brand} {props.model} !</p>
            
            {/* Different Data Types */}
            <p>The Car is from {props.year}! </p>
            <p>Name: {props.name}</p>
            {/* Objects and Arrays */}
            <p>My favorite cat is a {props.carinfo.name} {props.carinfo.model} !</p>
            <p>But it has to form {props.years[0]}, {props.years[1]}, or {props.years[2]} . </p>

            
            {/* Object Props */}
            <p>My {props.carInfo.name} {props.carInfo.model}! </p>
            <p>It is {props.carInfo.color } and it is from {props.carInfo.year}! </p>

            {/* Array Props */}
            <p>My car is a {props.carIn[0]} {props.carIn[1]}! </p>
            
            {/* Destructuring Props */}
            <p>My Full Name: {Fname} {Lname }</p>

        </>
    )
}

export default Props1;

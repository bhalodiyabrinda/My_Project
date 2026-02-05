import React from "react";
import Props1 from "./Props1";

function Props2() {

    //Different Data Types 
    let X = 'hiii';
    let Y = [2000, 2001, 2002];
    let Z = { name: "Ford", model: "Mustang" };
    
    // Object Props
    const carInfo = {
        name: "Ford",
        model: "Mustang",
        color: "red",
        year: 1969
    };

    // Array Props
    const carIn = ["Ford", "Mustang"];

    return (
        <>
            <h1>Props Examples</h1>
            <Props1
                brand="Ford"
                color="red"
                model="Mustang"
                year={2000}

                // Different Data Types 
                name={X}
                years={Y}
                carinfo={Z}

                // Object Props
                carInfo={carInfo}

                // Array Props
                carIn={carIn}

                // Destructuring Props
                Fname="Brinda"
                Lname="Bhalodiya"
            />           
        </>
    )
}
export default Props2;
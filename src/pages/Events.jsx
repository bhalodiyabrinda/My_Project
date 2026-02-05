import React from "react";
function Events() {
    // Adding Events
    const shoot = () => {
        alert("great shoot!!!!")
    }

    // Passing Arguments
    const Arg = (a) => {
        alert(a);
    }

    // Event Object
    const Obj = (x, y) => {
    alert(y.type);
  };
    return (
        <>
            <h1>Events</h1>
            {/* Adding Events */}
            <button onClick={shoot}> Take the shot!</button>

            {/* Passing Arguments */}
            <button onClick={() => Arg("Goal!!!!!!!!!!!")}>Take the shot!</button>
        
            {/* Event Object */}
            <button onClick={(event) => Obj("Goall!!!!!", event)}>Take the shot! </button>        
        
        </>
    )
}
export default Events;
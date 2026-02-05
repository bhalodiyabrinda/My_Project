import React from 'react'

function Conditions() {
    const X = 5;
    let y = "Apple";
    if (X < 10) {
        y = "Banana";
    }

    return (
        <>
            {/* if statements */}
            <h1>Conditions</h1>
            <p>{y}</p>

            {/* ternary expressions */}
            <p>{(X) > 10 ? "Banana" : "Apple"}</p>
        </>
  )
}

export default Conditions;
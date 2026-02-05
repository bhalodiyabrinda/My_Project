import React from 'react'

function Attributes() {
    //Expressions
    const X = "mycls";
    
    //camelCase
    const myfunc = () => {
        alert('camelCase Event Attributes')
    };

    //Boolean
    const boolfunc = () => {
        alert('Boolean Attributes')
    };

    //style
    const mystyles = {
        color: 'red',
        fontSize: '30px',
        backgroundColor: 'lightpink',
    };
    
    return (
        <>
            {/* className  */}
            <h1 className="myclass">Attributes example:</h1>
        
            <p className={X}>Expressions as Attributes </p>

            <button onClick={myfunc}>Clik me</button> <br />

            <button onClick={boolfunc} disabled>clik me</button>
            <button onClick={boolfunc} disabled={true}>clik me</button>
            <button onClick={boolfunc} disabled={false}>clik me</button>

            <p style={mystyles}>The style Attribute</p>
        </>
    );
}

export default Attributes
import React from "react";

function Lists() {
    // map() method
    const cars = ['Ford', 'BMW', 'Audi'];

    // Keys in React Lists
    const fruits = [
        { id: 1001, name: 'Apple' },
        { id: 1002, name: 'Banana' },
        { id: 1003, name: 'Mango' }
    ];

    // Array Index as Keys
    const vegetables = ['Potato', 'Onion', 'Tometo'];

    return (
        <>
            <h1>Lists</h1>
            {/* map() method */}
            <ul>
                {cars.map((car) => <li>I am a {car}</li>)}
            </ul>
        
            {/* Keys in React Lists */}
            <ul>
                {fruits.map((fru) => <li key={fru.id}> Name: {fru.name }</li>) } 
            </ul>

            {/* Array Index as Keys */}
            <ul>
                {vegetables.map((vag, index) => <li key={index}> Name: { vag}</li>)}
            </ul>
        
        </>
    )
}
export default Lists;
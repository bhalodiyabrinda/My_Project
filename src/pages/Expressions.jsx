//function call
function kwtophp(kw) {
    return kw * 1.67;
}
function Car() {
    // variables
    const hp = 218 * 1.36;

    // Object Properties
    const myobj = {
        name: "fiat",
        model: "500",
        color: "white"
    };
    
  return (
      <>
          <h1>Expressions</h1>
        <p>It has {hp} horsepower</p>   
        <p>It has {kwtophp(218)} horsepower</p>       
        <div>My car is a {myobj.color} {myobj.name} {myobj.model}</div>
    </>
  );
}

export default Car;

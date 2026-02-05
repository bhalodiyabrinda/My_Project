import React, { useState } from "react";

function Forms() {
  const [inputs, setInputs] = useState({
    firstname: "Brinda",
    
  });

    function handleChange(e) {
        const target = e.target;
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? target.checked : target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

  function handleRadioChange(e) {
    setInputs(values => ({
      ...values,
      gender: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let skills = [];
    if (inputs.html) skills.push("HTML");
    if (inputs.css) skills.push("CSS");
    if (inputs.js) skills.push("JavaScript");
    if (inputs.react) skills.push("React");

    let fill = skills.length > 0 ? skills.join(" and ") : "No Skills";

    alert(
`Full Name: ${inputs.firstname} ${inputs.lastname}
Password: ${inputs.psw}
Gender: ${inputs.gender}
Skills: ${fill}
City: ${inputs.city}
Address: ${inputs.adr}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>

      <label>Enter your First name:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>Enter your Last name:
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>Enter your password:
        <input
          type="password"
          name="psw"
          value={inputs.psw}
          onChange={handleChange}
        />
      </label>
      <br />

      {/* ✅ RADIO BUTTON CORRECTED */}
      <label>Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={inputs.gender === "male"}
          onChange={handleRadioChange}
        /> Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={inputs.gender === "female"}
          onChange={handleRadioChange}
        /> Female
      </label>

      <br />

      {/* ✅ CHECKBOX CORRECTED */}
      <label>Skills:</label>
      <br />

      <label>HTML
        <input
          type="checkbox"
          name="html"
          checked={inputs.html}
          onChange={handleChange}
        />
      </label>

      <label>CSS
        <input
          type="checkbox"
          name="css"
          checked={inputs.css}
          onChange={handleChange}
        />
      </label>

      <label>JavaScript
        <input
          type="checkbox"
          name="js"
          checked={inputs.js}
          onChange={handleChange}
        />
      </label>

      <label>React
        <input
          type="checkbox"
          name="react"
          checked={inputs.react}
          onChange={handleChange}
        />
      </label>

      <br />

      {/* ✅ SELECT DROPDOWN CORRECT */}
      <label>Select your City:
        <select name="city" value={inputs.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Jamnagar">Jamnagar</option>
        </select>
      </label>
      <br />

      {/* ✅ ADDRESS FIELD FIXED */}
      <label>Enter your Address:
        <textarea
          name="adr"
          value={inputs.adr}
          onChange={handleChange}
        />
      </label>
      <br />

      {/* ✅ SUBMIT BUTTON FIXED */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;

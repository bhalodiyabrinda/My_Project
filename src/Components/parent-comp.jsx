import React from "react";
import ChildComp from "./child-comp";

const ParentComp = (props) => {
  let color = "red";

  return (
    <>
      <h3> parent-comp & chil-comp</h3>
      <div>Parent Component: {color ? "Yes" : "No"} </div>
      <p>{props.children}</p>
      <ChildComp name="Parent data" />
    </>
  );
};

export default ParentComp;

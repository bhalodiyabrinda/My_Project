import React from "react";

const ChildComp = (props) => {
  console.log("Child Data:", props.name);
    return (
        <div>ChildComp</div>
    );
};

export default ChildComp;

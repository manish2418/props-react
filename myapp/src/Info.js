import React from "react";

function Info(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <h1>My Address :{props.add}</h1>
    </div>
  );
}

export default Info;

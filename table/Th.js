import React from "react";

function Th(props) {
  return (
    <th key={props.key} style={props.style}>
      {props.value}
    </th>
  );
}

export default Th;

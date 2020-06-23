import React from "react";

function Td(props) {
  return (
    <td key={props.key} style={props.style}>
      {props.value}
    </td>
  );
}

export default Td;

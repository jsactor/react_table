import React from "react";

function Tr(props) {
  return <tr key={props.key}>{props.value}</tr>;
}
export default Tr;

import React from "react";
import css from "./css/styles";
import data from "./data/data";
import process_data from "./js/process_data";
import Th from "./Th_Class";
import Td from "./Td_Class";
import Tr from "./Tr";

function Table(props) {
  // get all data ready for populating in a table
  const processed_data = process_data(data);

  const tr = (data, i, thead) => {
    const cells = data.map((data, i) => {
      if (thead) {
        return <Th key={i} style={css.th} value={data} />;
      } else {
        return <Td key={i} style={css.td} value={data} />;
      }
    });
    return <Tr key={i} style={css.tr} value={cells} />; //
  };

  const rows = (data, thead) => {
    return data.map((row, i) => tr(row, i, thead));
  };

  return (
    <table style={css.table}>
      <thead>{rows(data.headers, true)}</thead>
      <tbody>{rows(processed_data, false)}</tbody>
    </table>
  );
}

export default Table;

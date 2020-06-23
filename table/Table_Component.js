import React from "react";

function Table(props) {
  const css = {
    table: {
      width: "100%",
      maxWidth: "1000px",
      border: "1px solid #999",
      borderSpacing: "0",
    },
    th: {
      backgroundColor: "#999",
      border: "1px solid #999",
      color: "#fff",
      textAlign: "left",
      verticalAlign: "top",
      padding: ".4rem .6rem",
      width: "25%",
    },
    td: {
      backgroundColor: "#f4f4f4",
      border: "1px solid #999",
      color: "#444",
      padding: ".4rem .6rem",
      textAlign: "left",
      width: "25%",
    },
  };

  const data = {
    extensions: [".xls", ".pdf", ".docx", ".txt"],
    headers: [
      [
        "Index",
        "Data type",
        "Value",
        "French Formatted Value for numbers only",
      ],
    ],
    values: [
      "filename.pdf",
      "-123",
      "abcd efg higk",
      "123,123.45",
      "filename.xls",
    ],
    filetypes: {
      file: "File",
      number: "Number",
      string: "String",
    },
  };

  const process_data = (data) => {
    const d = data.values;
    const ft = data.filetypes;
    const ext = data.extensions;
    let processed_data = [];

    // allows digits, desimal point, negative
    const regexNumber = (v) => {
      return /^[0-9.,-]*$/.test(v);
    };

    // allows alphanumeric characters only
    const regexString = (v) => {
      return /^[a-zA-Z0-9 ]*$/.test(v);
    };

    const getFiletype = (v, extensions) => {
      for (const t of extensions) {
        if (v.endsWith(t)) {
          return ft["file"];
        } else if (regexNumber(v)) {
          return ft["number"];
        } else if (regexString(v)) {
          return ft["string"];
        }
      }
    };

    const formatValue = (v) => {
      if (!regexNumber(v)) return null;
      let f = v
        .replace(/[^\d\-.,]/g, "")
        .replace(",", " ")
        .replace(/\.(?=.*\.)/g, "")
        .replace(".", ",");

      return f;
    };

    for (const [i, v] of d.entries()) {
      let array = [];
      array.push(i + 1);
      array.push(getFiletype(v, ext));
      array.push(v);
      array.push(formatValue(v));
      processed_data.push(array);
    }
    return processed_data;
  };

  // get all data ready for populating in a table
  const processed_data = process_data(data);

  const th = (v, i) => {
    return (
      <th key={i} style={css.th}>
        {v}
      </th>
    );
  };

  const td = (v, i) => {
    return (
      <td key={i} style={css.td}>
        {v}
      </td>
    );
  };

  const tr = (data, i, thead) => {
    const cells = data.map((data, i) => {
      if (thead) {
        return th(data, i);
      } else {
        return td(data, i);
      }
    });
    return <tr key={i}>{cells}</tr>;
  };

  const rows = (data, thead) => {
    const cells = data.map((row, i) => tr(row, i, thead));
    return cells;
  };

  return (
    <table style={css.table}>
      <thead>{rows(data.headers, true)}</thead>
      <tbody>{rows(processed_data, false)}</tbody>
    </table>
  );
}

export default Table;

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

export default process_data;

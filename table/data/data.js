const data = {
  extensions: [".xls", ".pdf", ".docx", ".txt"],
  headers: [
    ["Index", "Data type", "Value", "French Formatted Value for numbers only"],
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
export default data;

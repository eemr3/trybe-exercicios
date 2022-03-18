const fs = require("fs");

const readFiles = (file) => {
  const files = fs.readFileSync(file, "utf8");
  return JSON.parse(files);
};

const createFiles = (file, content) => {
  return fs.writeFileSync(file, JSON.stringify(content));
};

module.exports = { readFiles, createFiles };

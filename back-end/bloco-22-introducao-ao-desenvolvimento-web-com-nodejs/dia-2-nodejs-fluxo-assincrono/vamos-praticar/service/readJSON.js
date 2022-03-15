const fs = require("fs").promises;

const readJSONSimpsions = async (fileJson) => {
  try {
    const data = await fs.readFile(fileJson);
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    return console.log(error);
  }
};

module.exports = readJSONSimpsions;

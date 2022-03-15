const data = {
  a: 0,
  b: 0,
  c: 0,
};

const generateRandomNumber = () => {
  data.a = Math.floor(Math.random() * 100 + 1);
  data.b = Math.floor(Math.random() * 100 + 1);
  data.c = Math.floor(Math.random() * 100 + 1);
};

module.exports = {
  data,
  generateRandomNumber,
};

const calc = require("./service/calc");
const {
  data,
  generateRandomNumber,
} = require("./service/randomGenerateNumber");

// const resultCal = () => {
//   generateRandomNumber();

//   calc(data.a, data.b, data.c)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// };

// resultCal();

// Com async / await
const resultCal = async () => {
  generateRandomNumber();
  try {
    const result = await calc(data.a, data.b, data.c);
    return console.log(result);
  } catch (error) {
    console.log(error);
  }
};

resultCal();

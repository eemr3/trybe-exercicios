const randomNumber = () => {
  return Math.random() * 100;
};

const stringUpperCase = (str) => {
  return str.toUpperCase();
};

const strinFirtCharUpperCase = (str) => {
  return str[0];
};

const concatString = (strOne, strTwo) => {
  return strOne + strTwo;
};

const apiDogPicture = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};

module.exports = {
  randomNumber,
  stringUpperCase,
  strinFirtCharUpperCase,
  concatString,
  apiDogPicture,
};

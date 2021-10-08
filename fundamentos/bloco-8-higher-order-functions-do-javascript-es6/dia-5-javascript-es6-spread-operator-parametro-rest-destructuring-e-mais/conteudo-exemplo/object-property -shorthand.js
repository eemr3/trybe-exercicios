/* Object Property Shorthand */
// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

const newUser = (id, name, email) => {
  // Shorthand
  return {
    id,
    name,
    email,
  };
};

// console.log(newUser(54, 'isabella', 'isabella@email.com'));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));


/* Default Parameters */
const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));
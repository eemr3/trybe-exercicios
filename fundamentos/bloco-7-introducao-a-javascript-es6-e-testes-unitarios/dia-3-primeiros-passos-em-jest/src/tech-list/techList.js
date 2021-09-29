const techList = (array, name) => {
  if (array.length === 0) {
    return "Vazio!";
  }
  const newArray = array.sort().map((item) => {
    return { tech: item, name };
  });

  return newArray;
};

module.exports = techList;

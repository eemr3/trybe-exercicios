const arrayNumber = [2, 4, 6, 7, 10, 0, -3];

function lowerIndexArray(arr) {
  let lowerIndex = 0;
  let lowerNumber = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < lowerNumber) {
      lowerIndex = index;
      lowerNumber = arr[index];
    }
  }
  return lowerIndex;
}

console.log(lowerIndexArray(arrayNumber));

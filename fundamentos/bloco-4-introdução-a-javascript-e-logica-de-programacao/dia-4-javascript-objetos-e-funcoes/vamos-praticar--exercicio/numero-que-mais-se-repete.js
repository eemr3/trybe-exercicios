const arrayNumber = [2, 3, 2, 5, 8, 2, 3];

function numberRepeats(arr) {
  let number = arr[0];
  let numberRepeat = 0;

  for (index = 0; index < arr.length; index += 1) {
    number = arr[index];
    if (numberRepeat === arr[index]) {
      numberRepeat = arr[index];
      number = arr[index];
    }
  }
  return numberRepeat;
}

console.log(numberRepeats(arrayNumber));

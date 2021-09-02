const arrayNumber = [102, 3, 26, 7, 10, 1001];

function returnHighIndex(arr) {
  let highIndex = 0;
  let highNumber = arr[0];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > highNumber) {
      highIndex = index;
      highNumber = arr[index];
    }
  }

  return highIndex;
}

console.log(returnHighIndex(arrayNumber));

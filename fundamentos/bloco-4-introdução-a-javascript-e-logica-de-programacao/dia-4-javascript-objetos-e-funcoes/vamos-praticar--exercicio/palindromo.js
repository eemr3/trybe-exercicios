// function verifyPalindromo(word) {
//   const reverWord = word.split("").reverse().join("");
//   if (word.includes(reverWord)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function verifyPalindromo(word) {
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPalindromo("ana"));

let noataDoAluno = 105;

if (noataDoAluno >= 90 && noataDoAluno <= 100) {
  console.log(`Sua nota foi A`);
} else if (noataDoAluno >= 80 && noataDoAluno < 90) {
  console.log(`Sua nota foi B`);
} else if (noataDoAluno >= 70 && noataDoAluno < 80) {
  console.log(`Sua nota foi C`);
} else if (noataDoAluno >= 60 && noataDoAluno < 70) {
  console.log(`Sua nota foi D`);
} else if (noataDoAluno >= 50 && noataDoAluno < 60) {
  console.log(`Sua nota foi E`);
} else if (noataDoAluno < 50 && noataDoAluno >= 0) {
  console.log(`Sua nota foi F`);
} else {
  console.log("Nota inválida!");
}

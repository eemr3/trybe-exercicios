const firstSide = 150;
const secondSide = 50;
const thirdSeid = 30;
const angle = firstSide + secondSide + thirdSeid;

if (angle === 180 && firstSide > 0 && secondSide > 0 && thirdSeid > 0) {
  console.log(`${true} - é um triângulo!`);
} else if (firstSide < 0 || secondSide < 0 || thirdSeid < 0) {
  console.log("Erro: Um triângulo não pode possuir ângulo negativo!");
} else {
  console.log(`${false} - não é um triângulo!`);
}

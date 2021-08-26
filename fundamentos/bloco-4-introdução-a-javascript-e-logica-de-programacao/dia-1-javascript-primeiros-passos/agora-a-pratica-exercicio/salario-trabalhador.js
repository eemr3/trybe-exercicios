const salarioBruto = 1556.94;
const innsFixo = 570.88;
let AliqutoInss = 0;
let salarioLiquido = 0;
let valorInssDesconto = 0;
let ir = 0;
let salrioBase = 0;

if (salarioBruto <= 1556.94) {
  AliqutoInss = 8;
  valorInssDesconto = (salarioBruto * AliqutoInss) / 100;
  salrioBase = salarioBruto - valorInssDesconto;

  salarioLiquido = salrioBase - ir;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  AliqutoInss = 9;
  valorInssDesconto = (salarioBruto * AliqutoInss) / 100;
  salrioBase = salarioBruto - valorInssDesconto;
  if (salrioBase >= 1903.99 && salrioBase <= 2826.65) {
    ir = ((salrioBase * 7.5) / 100 - 0).toFixed(2);
  }
  salarioLiquido = salrioBase - ir;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  AliqutoInss = 11;
  valorInssDesconto = (salarioBruto * AliqutoInss) / 100;
  salrioBase = salarioBruto - valorInssDesconto;
  if (salrioBase >= 1903.99 && salrioBase <= 2826.65) {
    ir = ((salrioBase * 7.5) / 100 - 142.8).toFixed(2);
  } else {
    ir = ((salrioBase * 22.5) / 100 - 636.13).toFixed(2);
  }
  salarioLiquido = salrioBase - ir;
} else {
  salrioBase = salarioBruto - innsFixo;
  if (salrioBase > 4664.68) {
    ir = ((salrioBase * 27.5) / 100 - 869.36).toFixed(2);
  }
  salarioLiquido = salrioBase - ir;
}

console.log("Aliqota do INSS " + AliqutoInss);

console.log("IR " + ir);
console.log("Desconto INSS " + valorInssDesconto);

console.log(`Salário base -> ${salrioBase}`);
console.log(`Salário liquido -> ${salarioLiquido}`);

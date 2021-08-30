let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log(`Bem-vinda, ${info.personagem}`);

info["recorrente"] = "Sim";

// console.log(info);

// for (key in info) {
//   console.log(key);
// }

// for (key in info) {
//   console.log(info[key]);
// }

let infoTwo = {
  personagem: "Tio Patinhas",
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: "O último MacPatinhas",
};

infoTwo["recorrente"] = "Sim";
let result = {};

for (key in info) {
  result[key] = `${info[key]} e `;
}

for (key in infoTwo) {
  result[key] += infoTwo[key];
}

for (key in result) {
  if (result.recorrente === "Sim e Sim") {
    result.recorrente = "Ambos recorrene";
  }
  console.log(result[key]);
}

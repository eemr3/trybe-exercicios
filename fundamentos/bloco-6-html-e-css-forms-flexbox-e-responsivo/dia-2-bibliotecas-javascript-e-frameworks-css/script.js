const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Paraná",
  "Paraíba",
  "Pará",
  "Pernambuco",
  "Piauí",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rio de Janeiro",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "Sergipe",
  "São Paulo",
  "Tocantins",
];

const uf = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PR",
  "PB",
  "PA",
  "PE",
  "PI",
  "RN",
  "RS",
  "RJ",
  "RO",
  "RR",
  "SC",
  "SE",
  "SP",
  "TO",
];

validation.init("#form-trybe");

// validation.highlight();
// function validateDataForm() {
//   const inputsForm = document.querySelectorAll(".input-form");
//   let message = "";
//   for (let index = 0; index < inputsForm.length; index += 1) {
//     if (inputsForm[index].value.trim() === "") {
//       message = "Campo obrigatório! Por favor preencha.";
//     }
//   }
//   return message;
// }

function generateUf() {
  const selectEstado = document.querySelector("#estado-select");

  for (let index = 0; index < estados.length; index += 1) {
    const optionSelect = document.createElement("option");
    optionSelect.setAttribute("value", uf[index]);
    optionSelect.innerHTML = estados[index];
    selectEstado.appendChild(optionSelect);
  }
}

// function validaTextArea() {
//   const textAreaDados = document.querySelector("#curriculo-text");

//   let message = "";
//   if (textAreaDados.value === "") {
//     message = "Campo obrigatório! Por favor preencher.";
//   }
//   return message;
// }

generateUf();

function setPikedayLibDate() {
  const inputDate = document.querySelector("#datepicker");
  inputDate.DatePickerX.init({
    mondayFirst: true,
    format: "dd/mm/yyyy",
    minDate: new Date(0, 0),
    maxDate: new Date(9999, 11, 31),
    weekDayLabels: ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"],
    shortMonthLabels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    singleMonthLabels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    todayButton: true,
    todayButtonLabel: "Today",
    clearButton: true,
    clearButtonLabel: "Clear",
  });
}

setPikedayLibDate();

function getValueRadioButton() {
  const complento = document.querySelectorAll(".form-check-input");
  for (let index = 0; index < complento.length; index += 1) {
    if (complento[index].checked) {
      return complento[index].value;
    }
  }
}

function setDadosDoCurriculo() {
  const areaDeMotagemCurriculo = document.querySelector("#curriculo-pronto");
  const nameInpur = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const enderecoInput = document.querySelector("#endereco-input");
  const cidadeImput = document.querySelector("#cidade-input");
  const estadoInput = document.querySelector("#estado-select");
  const complento = getValueRadioButton();

  const textAreaInput = document.querySelector("#curriculo-text");
  const cargoInput = document.querySelector("#cargo-input");
  const descricaoCargo = document.querySelector("#descricao-cargo");
  const dataInicioInput = document.querySelector("#datepicker");
  const arrayvalueElement = [
    nameInpur.value,
    emailInput.value,
    enderecoInput.value,
    cidadeImput.value,
    estadoInput.value,
    complento,
    textAreaInput.value,
    cargoInput.value,
    descricaoCargo.value,
    dataInicioInput.value,
  ];

  for (let index = 0; index < 10; index += 1) {
    const divRsultado = document.createElement("div");
    divRsultado.innerHTML = arrayvalueElement[index];
    areaDeMotagemCurriculo.appendChild(divRsultado);
  }
}

const btnEnviarForm = document.querySelector("#botao-enviar");
btnEnviarForm.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validation.validate()) {
    validation.highlight();
  } else {
    setDadosDoCurriculo();
  }
});

const btnReset = document.querySelector("#limpar-dados");
btnReset.addEventListener("click", () => {
  const areaDeMotagemCurriculo = document.querySelector("#curriculo-pronto");
  areaDeMotagemCurriculo.innerHTML = "";
});

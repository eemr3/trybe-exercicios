const estados = [
  "Rondônia",
  "Acre",
  "Amazonas",
  "Roraima",
  "Pará",
  "Amapá",
  "Tocantins",
  "Maranhão",
  "Piauí",
  "Ceará",
  "Rio Grande do Norte",
  "Paraíba",
  "Pernambuco",
  "Alagoas",
  "Sergipe",
  "Bahia",
  "Minas Gerais",
  "Espírito Santo",
  "Rio de Janeiro",
  "São Paulo",
  "Paraná",
  "Santa Catarina",
  "Rio Grande do Sul",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Goiás",
  "Distrito Federal",
];

const uf = [
  "RO",
  "AC",
  "AM",
  "RR",
  "PA",
  "AP",
  "TO",
  "MA",
  "PI",
  "CE",
  "RN",
  "PB",
  "PE",
  "AL",
  "SE",
  "BA",
  "MG",
  "ES",
  "RJ",
  "SP",
  "PR",
  "SC",
  "RS",
  "MS",
  "MT",
  "GO",
  "DF",
];

function validateDataForm() {
  const inputsForm = document.querySelectorAll(".input-form");
  let message = "";
  for (let index = 0; index < inputsForm.length; index += 1) {
    if (inputsForm[index].value.trim() === "") {
      message = "Campo obrigatório! Por favor preencha.";
    }
  }
  return message;
}

const btnEnviarForm = document.querySelector("#botao-enviar");
btnEnviarForm.addEventListener("click", (event) => {
  event.preventDefault();
  const spanMessage = document.querySelectorAll(".erro-form");
  let message = validateDataForm();
  console.log(message);
  for (let index = 0; index < spanMessage.length; index += 1) {
    if (message !== "") {
      spanMessage[index].innerHTML = message;
    } else {
      spanMessage[index].innerText = "";
    }
  }
});

function generateUf() {}

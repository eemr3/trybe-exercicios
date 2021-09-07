function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysOfMonth = document.querySelector("#days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = document.createElement("li");
    days.className = "day";
    days.innerText = dezDaysList[index];
    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      days.classList.add("holiday");
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      days.classList.add("friday");
    }
    daysOfMonth.appendChild(days);
  }
}
createDaysOfMonth();

function createHoliday(feriados) {
  const btnHoliday = document.createElement("button");
  const divContainer = document.querySelector(".buttons-container");

  btnHoliday.id = "btn-holiday";
  btnHoliday.innerText = feriados;
  divContainer.appendChild(btnHoliday);
}
createHoliday("Feriados");

const btnHolidayToggle = document.querySelector("#btn-holiday");
btnHolidayToggle.addEventListener("click", changeColorHoliday);

function changeColorHoliday() {
  const holidyBg = document.getElementsByClassName("holiday");
  for (element of holidyBg) {
    if (element.style.backgroundColor === "rgb(222, 226, 255)") {
      element.style.backgroundColor = "";
    } else {
      element.style.backgroundColor = "rgb(222, 226, 255)";
    }
  }
}

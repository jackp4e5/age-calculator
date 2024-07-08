const resultadoYear = document.getElementById("resultado_year");
const resultadoMonth = document.getElementById("resultado_month");
const resultadoDay = document.getElementById("resultado_day");
const resultado_p = document.querySelector(".resultado_p");
const buttonClass = document.querySelector(".form_button");
const form = document.querySelector(".form");
const error = document.querySelectorAll(".text_error");
const inputs = document.querySelectorAll(".form_input");
const labels = document.querySelectorAll(".form_label");

let textEmpty = "This field is required";
let textvalid = "Must be a valid ";
const colorError = "hsl(0, 100%, 67%)";
const colorSuccess = "hsl(0, 1%, 44%)";

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

let numberDay, numberMonth, numberYear;

const today = new Date();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let transformToNumber = [
    (numberDay = parseInt(day.value)),
    (numberMonth = parseInt(month.value)),
    (numberYear = parseInt(year.value)),
  ];
  const born = `${numberYear}-${numberMonth}-${numberDay}`;
  const userDate = new Date(born);

  if (userDate.getMonth() <= today.getMonth()) {
    resultadoYear.textContent = today.getFullYear() - userDate.getFullYear();
    resultadoMonth.textContent = today.getMonth();
    resultadoDay.textContent = today.getDate();
  } else if (
    !isNaN(today.getFullYear() - userDate.getFullYear()) &&
    userDate.getMonth() != 0 &&
    userDate.getFullYear() != 0
  ) {
    resultadoYear.textContent =
      today.getFullYear() - userDate.getFullYear() - 1;
    resultadoMonth.textContent = today.getMonth();
    resultadoDay.textContent = today.getDate();
  }
});

const funcionStylesError = (text, pocit, color) => {
  error[pocit].textContent = text;
  labels[pocit].style.color = color;
};
const validationForm = (e) => {
  let pocition;
  switch (e.target.name) {
    case "day":
      if (e.target.value === "") {
        pocition = 0;
        funcionStylesError(textEmpty, pocition, colorError);
        e.target.classList.add("form_input-error");
      } else if (
        isNaN(parseInt(e.target.value)) ||
        parseInt(e.target.value) >= 32
      ) {
        pocition = 0;
        funcionStylesError(textvalid + e.target.name, pocition, colorError);
      } else {
        pocition = 0;
        funcionStylesError(" ", pocition, colorSuccess);
        e.target.classList.remove("form_input-error");
      }

      break;
    case "month":
      if (e.target.value === "") {
        pocition = 1;
        funcionStylesError(textEmpty, pocition, colorError);
        e.target.classList.add("form_input-error");
      } else if (
        isNaN(parseInt(e.target.value)) ||
        parseInt(e.target.value) >= 13
      ) {
        pocition = 1;
        funcionStylesError(textvalid + e.target.name, pocition, colorError);
      } else {
        pocition = 1;
        funcionStylesError(" ", pocition, colorSuccess);
        e.target.classList.remove("form_input-error");
      }

      break;
    case "year":
      if (e.target.value === "") {
        pocition = 2;
        funcionStylesError(textEmpty, pocition, colorError);
        e.target.classList.add("form_input-error");
      } else if (isNaN(parseInt(e.target.value))) {
        pocition = 2;
        funcionStylesError(textvalid + e.target.name, pocition, colorError);
      } else if (parseInt(e.target.value) >= today.getFullYear()) {
        pocition = 2;
        funcionStylesError("Most be in the past", pocition, colorError);
        e.target.classList.add("form_input-error");
      } else {
        pocition = 2;
        funcionStylesError(" ", pocition, colorSuccess);
        e.target.classList.remove("form_input-error");
      }

      break;

    default:
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validationForm);
  input.addEventListener("blur", validationForm);
});

const display = document.querySelector(".display-screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "c") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}

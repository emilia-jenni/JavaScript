let firstNum = "";
let secondNum = "";
let operation = "";

document.getElementById("result").addEventListener("click", performCalculation);

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    updateSelectedOperation();
    updateDisplay();
  });
});

document.querySelectorAll(".numbers > div").forEach((button) => {
  button.addEventListener("click", function () {
    updateSelectedNumber();
    updateDisplay();
  });
});

function updateDisplay() {
  document.getElementById(
    "input"
  ).innerText = `${firstNum} ${operation} ${secondNum}`;
}

function updateSelectedNumber() {
  if (this.innerText === "." && firstNum.indexOf(".") > -1) {
    return;
  }
  firstNum += this.innerText;
}

/**
 * update the variable operation which the user choice
 * @return {void}
 */

function updateSelectedOperation() {
  secondNum = firstNum;
  firstNum = " ";
}

switch (this.innerText) {
  case "+":
    operation = "plus";
    break;
  case "-":
    operation = "minus";
    break;
  case "*":
    operation = "multiply";
    break;
  case "/":
    operation = "divide";
    break;
  default:
    console.log("Error");
    break;
}

/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */

function performCalculation() {
  if (operation === "plus") return firstNum + secondNum;
  if (operation === "minus") return firstNum - secondNum;
}

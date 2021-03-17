let firstNum = "";
let secondNum = "";
let operation = "";
let result = 0;

function performCalc() {
  const _first = Number(firstNum);
  const _second = Number(secondNum);

  if (operation === "+") {
    result = _first + _second;
  } else if (operation === "-") {
    result = _first - _second;
  } else if (operation === "*") {
    result = _first * _second;
  } else if (operation === "/") {
    result = _first / _second;
  } else {
    result = "oops";
  }

  document.getElementById("input").innerText = `${result}`;
  firstNum = "";
  secondNum = "";
  operation = "";
}

document.getElementById("result").addEventListener("click", performCalc);

document.querySelectorAll(".numbers > div").forEach((button) => {
  updateDisplay();
  button.addEventListener("click", function () {
    if (secondNum === "" && operation != "") {
      operation = "";
      updateDisplay();
    }
    if (this.innerText === "." && firstNum.indexOf(".") > -1) {
      return;
    } else {
      firstNum += this.innerText;
    }
    updateDisplay();
  });
});

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    secondNum = firstNum;
    firstNum = "";
    switch (this.innerText) {
      case "+":
        operation = `+`;
        break;
      case "-":
        operation = "-";
        break;
      case "*":
        operation = "*";
        break;
      case "÷":
        operation = "/";
        break;
      default:
        console.log("error");
        break;
    }
    updateDisplay();
  });
});

function updateDisplay() {
  document.getElementById(
    "input"
  ).innerText = `${firstNum} ${operation} ${secondNum}`;
}

function updateSelectedNumber(scope) {
  if (scope.innerText === "." && firstNum.indexOf(".") > -1) {
    return;
  }
  firstNum += this.innerText;
}

document.getElementById("clear").addEventListener("click", reset);

function reset() {
  firstNum = "";
  secondNum = "";
  operation = "";
  updateDisplay();
}

document.getElementById("clear").addEventListener("click", deleteLast);

function deleteLast() {
  if (firstNum != "") {
    firstNum = firstNum.toString().slice(0, -1);
    updateDisplay();
  } else if (firstNum == "" && operation != "") {
    operation = "";
    updateDisplay();
  } else if (firstNum == "" && operation == "") {
    console.log(secondNum);
    secondNum = secondNum.toString().slice(0, -1);
    updateDisplay();
  } else {
    console.log("An error occured");
  }
}

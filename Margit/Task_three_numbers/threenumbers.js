/*2.	Make a program that asks three numbers from the user. Program prints out sum of the numbers, if any of the numbers is positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, text â€œonly negativesâ€ is printed. Handle zero as positive in this assignment. */

const positiveNumbers = () => {
  let num1 = Number(prompt("Enter first number"));
  let num2 = Number(prompt("Enter second number"));
  let num3 = Number(prompt("Enter third number"));
  let solution = document.getElementById("solution");
  let text;
  let sum = num1 + num2 + num3;
  let multi = num1 * num2 * num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    text = `Sum of the numbers is ${sum} and multification is ${multi}`;
  } else if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
    text = `Sum of the numbers is ${sum}`;
  } else if (num1 < 0 && num2 < 0 && num3 < 0) {
    text = "Only negative numbers";
  }
  solution.textContent = text;
};

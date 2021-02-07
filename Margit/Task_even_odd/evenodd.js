/*3.	Make a program that asks one number from the user. Then the program finds out if the number is positive and is the number divisible by 2. Message "that is even number" is printed else "that number is odd" is printed.*/

const evenOdd = () => {
  let num = Number(prompt("Enter first number"));

  let solution = document.getElementById("solution");
  let text;

  if (num >= 0 && num % 2 == 0) {
    text = `${num} is even`;
  } else if (num >= 0 && num % 2 !== 0) {
    text = `${num} is odd`;
  } else {
    text = `${num} is negative`;
  }
  solution.textContent = text;
};

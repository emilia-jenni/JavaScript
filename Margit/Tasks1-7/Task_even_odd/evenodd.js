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

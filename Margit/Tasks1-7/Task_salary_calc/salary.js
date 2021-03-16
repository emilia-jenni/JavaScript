/*5. Make a program that asks hourly salary and how many hours user worked on one day. With this information program calculates dayâ€™s salary.
The salary is calculated as follows:
- first 7 hours by hourly salary
- next 2 hours 50% extra
- rest of the hours 100% extra*/

const countSalary = () => {
  let salaryH = Number(document.getElementById("salaryH").value);
  let hours = Number(document.getElementById("hours").value);
  let solution = document.getElementById("solution");

  let overPay2h = salaryH * 1.5;
  let overPayRest = salary * 2;
  let result;

  if (hours <= 7) {
    result = salaryH * hours;
  } else if (hours >= 8 && hours <= 9) {
    result = hours * 7 + overPay2h * (hours - 7);
  } else if (hours > 9) {
    result = hours * 7 + overPay2H * 2 + overPayRest * (hours - 9);
  }
  solution.textContent = `You earned ${result} euros `;
};

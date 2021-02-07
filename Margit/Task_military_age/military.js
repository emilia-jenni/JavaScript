/*1.	Make a program that asks age of the user. If the age is less than 18 the text "too young" is printed. If the age is less than 27 the text "Right age for military service" is printed. If the age is less than 41 the text "You are in reserve" is printed.  If the age is less than 55 the text "You are in backup reserve" is printed. All other cases "too aged" is printed. */

const militaryAge = () => {
  let age = prompt("How old are you?");
  let solution = document.getElementById("solution");
  let text;

  if (age < 18) {
    text = "You are too young for military service";
  } else if (age < 27) {
    text = "Right age for military service";
  } else if (age < 41) {
    text = "You are in the reserve";
  } else if (age < 55) {
    text = "You are in the backup reserve";
  } else {
    text = "You are too old for military service";
  }
  solution.textContent = text;
};

/*let age = prompt("how old are you?");if (age < 18) {alert("you are too young")} else {alert("welcome")}
 */

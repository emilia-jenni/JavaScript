/*4. Make a program that calculates body mass index. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres. Based on result display correct range:
BMI	          	Status
Below 18.5	    Underweight
18.5 â€“ 24.9	    Normal or Healthy Weight
25.0 â€“ 29.9	    Overweight
30.0 and Above	Obese */

function calcBMI() {
  let heightcm = Number(document.getElementById("height").value) / 100;
  let weightkg = Number(document.getElementById("weight").value);
  let result = document.getElementById("solution");
  
  let bmi = weightkg / (heightcm * heightcm);
  );

  let text;

  if (bmi <= 18.5) {
  text = `Your BMI is ${bmi} - Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    text = `Your BMI is ${bmi} - Normal/healthy weight`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    text = `Your BMI is ${bmi}` - Overweight;
  } else {
    text = `Your BMI is ${bmi} - Obese`;
  }

  solution.textContent = text;
};

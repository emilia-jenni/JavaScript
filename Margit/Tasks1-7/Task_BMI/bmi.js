function calcBMI() {
  let heightcm = Number(document.getElementById("height").value) / 100;
  let weightkg = Number(document.getElementById("weight").value);
  let result = document.getElementById("solution");

  let bmi = weightkg / (heightcm * heightcm);

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
}

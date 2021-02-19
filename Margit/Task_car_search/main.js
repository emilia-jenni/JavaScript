let formInput = document.querySelector("#inputData");
let formSearch = document.querySelector("#searchData");

function Cars(license, brand, model, price, color) {
  this.licensePlate = license;
  this.brandName = brand;
  this.modelName = model;
  this.carPrice = price;
  this.carColor = color;
}

let carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let license = document.getElementById("license").value;
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let price = document.getElementById("price").value;
  let color = document.getElementById("color").value;
  let newCar = new Cars(license, brand, model, price, color);
  carArray.push(newCar);
  console.table(carArray);
  formInput.reset();
};

const searchCar = (event) => {
  event.preventDefault();
  console.log(carArray.length);
  let license = document.getElementById("searchLicense").value;
  let text = document.querySelector("p");
  if (carArray.length == 0) {
    text.textContent = "Please enter car details first";
  } else {
    for (let i = 0; i < carArray.length; i++) {
      if (carArray[i].licensePlate == license) {
        text.textContent = `License number ${carArray[i].licensePlate} is ${carArray[i].manufacturer} ${carArray[i].carModel}`;
      } else {
        text.textContent = "Error";
      }
    }
  }

  formSearch.reset();
};

let text = document.querySelector("p");

let car = {
  type: "Audi",
  year: 2013,
  ownerName: "Emilia",
  city: "Järvenpää",
  calcAge: function () {
    //this is now a method
    this.age = 2021 - this.year;
    return this.age;
  },
};
console.log(car);
console.log(car.year);

car.color = "White";
console.log(car);

delete car.city;
console.log(car);

text.textContent = `Your car is ${car.color} and the type is ${
  car.type
}. Your car is ${car.calcAge()} years old`;

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let myDad = new Person("Juha", "Vuorenmaa", 52, "green");
console.log(myDad);

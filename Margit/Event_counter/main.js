let form = document.querySelector("form");
let text = document.querySelector("#answer");
let countdown = document.querySelector("#timer");

let everyDay = [];
let businessDays = [];
let countdowntimer;

const daysRemaining = (event) => {
  event.preventDefault();

  let startingDate = new Date(document.getElementById("starting").value);
  let endingDate = new Date(document.getElementById("ending").value);
  let eventname = document.getElementById("eventname").value;

  while (startingDate < endingDate) {
    startingDate.setDate(startingDate.getDate() + 1);
    everyDay.push(startingDate);
    if (startingDate.getDay() !== 6 && startingDate.getDay() !== 0) {
      businessDays.push(startingDate);
    }
  }

  text.textContent = `There are ${everyDay.length} days and ${businessDays.length} workdays until ${eventname}`;

  form.reset();
  everyDay = [];
  businessDays = [];

  theTimer(endingDate, eventname);
};

const theTimer = (a, b) => {
  if (countdowntimer) {
    clearInterval(countdowntimer);
  }

  countdowntimer = setInterval(function () {
    let thisMoment = new Date();
    let theDifference = a.getTime() - thisMoment;

    let days = Math.floor(theDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (theDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((theDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((theDifference % (1000 * 60)) / 1000);

    countdown.textContent = `The countdown from today to ${b}: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
};

form.addEventListener("submit", daysRemaining);

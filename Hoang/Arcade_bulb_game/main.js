const NUMBER_OF_BULBS = 20;
const BLINKING_SPEED = 500;
const CHOSEN_BULB_INDEX = 10;

let counter = 0;
let bulbs = [];

//creating the bulbs
while (counter < NUMBER_OF_BULBS) {
  const newBulb = document.createElement("div");
  newBulb.className = "bulb";
  document.getElementById("light-bulbs").appendChild(newBulb);
  bulbs[counter] = false; //false indicates a switch off bulb
  counter++;
}

//resetting the the pointer to the first bulb
counter = 0;
document.getElementsByClassName("bulb")[counter].classList.add("active");
bulbs[counter] = true;

document
  .getElementsByClassName("bulb")
  [CHOSEN_BULB_INDEX].classList.add("chosen");

console.log(bulbs);

const timer = setInterval(() => {
  document.getElementsByClassName("bulb")[counter].classList.remove("active");
  //switching off the current bulb

  bulbs[counter] = false;

  //unless it is already the last bulb:
  if (counter < NUMBER_OF_BULBS - 1) {
    counter++; //get the next bulb in the array
  } else {
    counter = 0; //resetting back to first
  }

  bulbs[counter] = true; //switch it on
  document.getElementsByClassName("bulb")[counter].classList.add("active");

  console.clear();
  console.log(bulbs);
}, BLINKING_SPEED);

document.getElementById("stop-btn").addEventListener("click", () => {
  clearInterval(timer);

  if (
    document.querySelector(".active.chosen") &&
    counter === CHOSEN_BULB_INDEX
  ) {
    alert("You have won");
  } else {
    alert("No win");
  }
});

const arrangeBulbsInACircle = (nodes) => {
  const radius = "12em",
    start = -90,
    $els = [...nodes], // turn nodelist into a real array
    numberOfEls = $els.length,
    slice = 360 / numberOfEls;

  $els.forEach((el, index) => {
    const rotate = slice * index + start;
    const rotateReverse = rotate * -1;

    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};

// invoke the fn on the class bulb elements to create the effect
arrangeBulbsInACircle(document.getElementsByClassName("bulb"));

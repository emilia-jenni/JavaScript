let buttons = document.querySelectorAll(".circle");
let displayScore = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameOver = document.getElementById("gameover");

let close = document.getElementById("close");

let score = 0;
let active = 0;

buttons[0].onclick = function () {
  clicked(0);
};
buttons[1].onclick = function () {
  clicked(1);
};
buttons[2].onclick = function () {
  clicked(2);
};
buttons[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  console.log("clicked:", i);
  score++;
  displayScore.textContent = `Your score is ${score}`;
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startPlaying = () => {
  console.log("Game Started");

  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("Active:", active);

  timer = setTimeout(startPlaying, 1000);

  function pickNew(active) {
    let nextActive = getRandom(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

const stopPlaying = () => {
  clearTimeout(timer);
  console.log("Game Over");
  overlay.style.visibility = "visible";
  gameOver.textContent = `Your score is ${score}`;
};

const reloadGame = () => {
  console.log("What happened?");
  window.location.reload();
};

close.addEventListener("click", reloadGame);

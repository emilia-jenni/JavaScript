let buttons = document.querySelectorAll(".circle");
let displayScore = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameOver = document.getElementById("gameover");
let score = 0;
let close = document.getElementById("close");
let active = 0;
let speed = 1400;
let misses = 0;

let theme = new sound("avengersTheme.mp3");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function playTheme() {
  theme.play();
}
function pauseTheme() {
  theme.pause();
}

document.getElementById("stop").classList.add("invisible");
document.getElementById("scoreboard").classList.add("hidden");

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
  if (i === active) {
    clickSound.play();
    score++;
    displayScore.textContent = `Your score is ${score}`;
    speed *= 0.8;
    misses = 0;
    buttons[active].classList.remove("active");
  } else {
    endgameSound.play();
    console.log("Gameover");
    endGame();
  }
};

const startPlaying = () => {
  document.getElementById("scoreboard").classList.remove("hidden");

  console.log("Misses: " + misses);
  document.getElementById("start").classList.add("invisible");

  document.getElementById("stop").classList.remove("invisible");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("clicker");
  }

  console.log("game started");
  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("Active:", active);

  timer = setTimeout(startPlaying, speed);

  function pickNew(active) {
    let nextActive = getRandom(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
  misses++;
  console.log("Misses: " + misses);
  if (misses === 3) {
    endGame();
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stopPlaying = () => {
  theme.stop();
  clearTimeout(timer);
  console.log("Game Over!");
  overlay.style.visibility = "visible";
  if (score === 0) {
    gameOver.textContent = `Your score is ${score}. Seriously?`;
  } else if (score < 10) {
    gameOver.textContent = `Your score is ${score}. You could have done better!`;
  } else if (score < 15) {
    gameOver.textContent = `Your score is ${score}. Well done!`;
  } else if (score < 20) {
    gameOver.textContent = `Your score is ${score} Awesome!`;
  } else {
    gameOver.textContent = `Your score is ${score} Wow, that is awesome!`;
  }
};

function reloadGame() {
  console.log("What happened?");
  window.location.reload();
}

close.addEventListener("click", reloadGame);

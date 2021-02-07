/* 1. Create an **array of 5 elements**, each element is a random number of either 1 or 0*/
let stateOfWin = false;
let playedRounds = 0;
let jackpotCounter = 0;

const COST_OF_ONE_ROUND = 0.5;
const RANDOMIZE_RANGE = 6;
const JACKPOT_TO_BE_WON = 100;

while (jackpotCounter < JACKPOT_TO_BE_WON) {
  jackpotCounter++;

  stateOfWin = false;

  while (stateOfWin === false) {
    playedRounds++;

    let fiveNumbers = [];

    let counter = 0;

    while (counter < 5) {
      fiveNumbers[counter] = Math.floor(Math.random() * RANDOMIZE_RANGE);
      counter++;
    }

    //console.log("The value of the counter after the creation loop", counter);

    //2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
    //3. Also create a counter variable to keep track of the number of 1 and 0 values in the array

    let oneCounter = 0;
    let zeroCounter = 0;

    while (counter) {
      counter = counter - 1;
      if (fiveNumbers[counter] === 1) {
        oneCounter++;
      } else if (fiveNumbers[counter] === 0) {
        zeroCounter++;
      }
    }

    // console.log(`Found ${oneCounter} ones and ${zeroCounter} zeroes.`);

    if (oneCounter === 5) {
      stateOfWin = true;
      console.log("Jackpot!");
    } else if (zeroCounter === 5) {
      console.log("Sorry, no win. But getting five zeroes is still very lucky");
    } else if (oneCounter > 3 && oneCounter < 5) {
      console.log("Smaller price");
    } else {
      console.log("No win");
    }

    if (stateOfWin) {
      break;
    }
  }
}

console.log(
  `${playedRounds} rounds have been played before winning ${JACKPOT_TO_BE_WON} Jackpots`
);
console.log(
  `${
    playedRounds * COST_OF_ONE_ROUND
  } EUR was spent before winning ${JACKPOT_TO_BE_WON} Jackpots`
);

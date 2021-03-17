//Code for number 1

let jackpotNumber1 = Math.round(Math.random() * 1);

if (jackpotNumber1 === 1) {
  console.log("The first draw number is 1");
} else {
  console.log("The first draw number is 0");
}

//Code for number 2

let jackpotNumber2 = Math.round(Math.random() * 1);

if (jackpotNumber2 === 1) {
  console.log("The second draw number is 1");
} else {
  console.log("The second draw number is 0");
}

//Code for number 3

let jackpotNumber3 = Math.round(Math.random() * 1);

if (jackpotNumber3 === 1) {
  console.log("The third draw number is 1");
} else {
  console.log("The third draw number is 0");
}

//Code for number 4

let jackpotNumber4 = Math.round(Math.random() * 1);

if (jackpotNumber4 === 1) {
  console.log("The fourth draw number is 1");
} else {
  console.log("The fourth draw number is 0");
}

//Code for number 5

let jackpotNumber5 = Math.round(Math.random() * 1);

if (jackpotNumber5 === 1) {
  console.log("The fifth draw number is 1");
} else {
  console.log("The fifth draw number is 0");
}

//Jackpot draw calculation + message

let winningNumbers =
  jackpotNumber1 +
  jackpotNumber2 +
  jackpotNumber3 +
  jackpotNumber4 +
  jackpotNumber5;

switch (winningNumbers) {
  case 5:
    console.log(
      "Congratulations! You have won the Jackpot! " +
        `The probability for winning the Jackpot was ${
          1 / 2 ** 5
        } The luck was truly on your side!`
    );
    break;
  case 0:
    console.log(
      "So close! The probability to get five 0's is rare. Unfortunately, it did not reward you with a Jackpot."
    );
    break;
  default:
    console.log("Thanks for playing! Better luck next time!");
    break;
}

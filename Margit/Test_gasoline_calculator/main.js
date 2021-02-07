function calculate() {
  let price = Number(document.querySelector("#price").value);
  let money = Number(document.getElementById("money").value);
  let answer = document.querySelector("#answer");
  let solution = document.querySelector("#solution");

  let liters = Math.floor(money / price);
  let text;

  liters >= 10
    ? (text = "Good you can leave now")
    : (text = "Oh, you need to stay longer");

  answer.textContent = `You can buy ${liters} of gasoline`;
  solution.textContent = text;

  /* console.log(price);
  console.log(money);
  console.log(price * money);*/

  /* answer.textContent = money / price;
  /*Could also be answer.innerHtml or answer.innerText but .textContent is best and others give possibility to hack into your place*/
}

/*const calculateTwo = () => console.log(money / price);*/

/*function hello() {
  alert("Hello, my name is Emilia");
  yourN();
}

function yourN() {
  let yourName = prompt("What is your name?");
  greeting(yourName);
}

function greeting(name) {
  document.write(name);
}

hello();*/

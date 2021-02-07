const numbers = Math.round(Math.random() * 100);
let result;

if (0 <= numbers && numbers <= 10) {
  switch (numbers) {
    case 0:
      result = "nolla";
      break;
    case 1:
      result = "yksi";
      break;
    case 2:
      result = "kaksi";
      break;
    case 3:
      result = "kolme";
      break;
    case 4:
      result = "neljä";
      break;
    case 5:
      result = "viisi";
      break;
    case 6:
      result = "kuusi";
      break;
    case 7:
      result = "seitsemän";
      break;
    case 8:
      result = "kahdeksan";
      break;
    case 9:
      result = "yhdeksän";
      break;
    case 10:
      result = "kymmenen";
      break;
    default:
      break;
  }
} else if (10 <= numbers && number <= 19) {
  let remainer = numbers - 10;
  switch (remainer) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksan";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "toista;";
} else if (20 <= numbers && numbers <= 99) {
  let module = Math.floor(numbers / 10);
  let remainder = numbers % 10;

  switch (module) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksan";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "kymmentä";
  switch (remainder) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksan";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
} else {
  result = "sata";
}

console.log(result);

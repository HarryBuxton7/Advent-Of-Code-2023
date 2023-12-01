var lineReader = require("line-reader");

let sum: number = 0;
lineReader.eachLine("./input1.txt", (line: string, last: boolean) => {
  let number: string = line.replace(/[^0-9]/g, "");
  if (number.length == 2) {
    sum += parseInt(number);
  }
  if (number.length === 1) {
    number = number + number;
    sum += parseInt(number);
  }
  if (number.length > 2) {
    let newNumber = number[0] + number[number.length - 1];
    sum += parseInt(newNumber);
  }

  if (last) {
    console.log(sum);
  }
});

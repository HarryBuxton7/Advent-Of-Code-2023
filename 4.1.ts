var lineReader = require("line-reader");

let sum: number = 0;
lineReader.eachLine("./example4.1.txt", (line: string, last: boolean) => {
  const [cardNumber, cardNumbers] = line.split(":");
  let [winningNumbersArray, playerNumbersArray] = cardNumbers.split("|");
  const playerNumbers: number[] = playerNumbersArray
    .split(" ")
    .filter((e) => e.length > 0)
    .map((e) => parseInt(e));
  const winningNumbers: number[] = winningNumbersArray
    .split(" ")
    .filter((e) => e.length > 0)
    .map((e) => parseInt(e));

  let numberOfMatches: number = -1;

  for (let i: number = 0; i < playerNumbers.length; i++) {
    for (let j: number = 0; j < winningNumbers.length; j++) {
      if (playerNumbers[i] === winningNumbers[j]) {
        numberOfMatches++;
      }
    }
  }
  if (numberOfMatches > -1) {
    sum += Math.pow(2, numberOfMatches);
  }

  if (last) {
    console.log(sum);
  }
});

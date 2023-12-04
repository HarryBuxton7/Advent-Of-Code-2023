var lineReader = require("line-reader");

let cardsArray = [];
const inputLength: number = 193
for (let i = 0; i < inputLength; i++) {
  cardsArray.push(1);
}

let lineIndex = 0;

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

  let numberOfMatches: number = 0;

  for (let i: number = 0; i < playerNumbers.length; i++) {
    for (let j: number = 0; j < winningNumbers.length; j++) {
      if (playerNumbers[i] === winningNumbers[j]) {
        numberOfMatches++;
      }
    }
  }

  for (let i = 1; i < numberOfMatches + 1; i++) {
    if (cardsArray[lineIndex + i] !== undefined) {
      cardsArray[lineIndex + i] += cardsArray[lineIndex];
    }
  }

  lineIndex++;
  if (last) {
    console.log(cardsArray.reduce((acc, value) => acc + value));
  }
});

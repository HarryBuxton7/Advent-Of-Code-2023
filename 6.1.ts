import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

main(readfile("example6.1.txt"));

function main(linesArray) {
  const firstLineNumbers = linesArray[0]
    .split(" ")
    .filter((e) => e.match("^[0-9]+$"))
    .map((e) => parseInt(e));
  const secondLineNumbers = linesArray[1]
    .split(" ")
    .filter((e) => e.match("^[0-9]+$"))
    .map((e) => parseInt(e));
  const races = [];
  for (let i = 0; i < firstLineNumbers.length; i++) {
    races.push([firstLineNumbers[i], secondLineNumbers[i]]);
  }
  let waysToWin = [];
  for (const race of races) {
    const [time, distance] = race;
    let waysToWinCount = 0;
    for (let i = 0; i < time; i++) {
      let timeLeft = time - i;`1`
      if (timeLeft * i > distance) {
        waysToWinCount++;
      }
    }
    waysToWin.push(waysToWinCount);
  }
  console.log(waysToWin.reduce((a, b) => a * b, 1));
}

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
    .filter((e) => e.match("^[0-9]+$"));
  const secondLineNumbers = linesArray[1]
    .split(" ")
    .filter((e) => e.match("^[0-9]+$"));

  const time = parseInt(firstLineNumbers.reduce((acc, v) => acc + v));
  const distance = parseInt(secondLineNumbers.reduce((acc, v) => acc + v));
  let minTimeHeld: number;
  let maxTimeHeld: number;

  for (let i = 0; i < time; i++) {
    let timeLeft = time - i;
    if (timeLeft * i > distance) {
      minTimeHeld = i;
      break;
    }
  }

  for (let i = time; i >= 0; i--) {
    let timeLeft = time - i;
    if (timeLeft * i > distance) {
      maxTimeHeld = i;
      break;
    }
  }
  console.log(maxTimeHeld - minTimeHeld + 1);
}

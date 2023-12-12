import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(linesArray) {
  let historyValues: number[] = [];
  for (const history of linesArray) {
    const historyArray: number[] = history.split(" ").map((e) => parseInt(e));
    let savedSequences: number[][] = [[...historyArray]];
    let currentSequence = historyArray;
    let sequenceContainsNumbers = true;
    while (sequenceContainsNumbers) {
      let newArray: number[] = [];
      sequenceContainsNumbers = false;
      for (let i = 0; i < currentSequence.length - 1; i++) {
        newArray.push(currentSequence[i + 1] - currentSequence[i]);
        if (currentSequence[i + 1] - currentSequence[i] !== 0) {
          sequenceContainsNumbers = true;
        }
      }
      savedSequences.push(newArray);
      currentSequence = newArray;
    }
    savedSequences.reverse();
    let currentPlaceholder = 0;
    for (let i = 0; i < savedSequences.length - 1; i++) {
      currentPlaceholder += savedSequences[i + 1][savedSequences[i + 1].length - 1];
    }
    historyValues.push(currentPlaceholder);
  }
  console.log(historyValues.reduce((acc, value) => acc + value)); //answer
}

main(readfile("example9.txt"));

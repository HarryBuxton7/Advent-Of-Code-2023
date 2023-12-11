import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(linesArray) {
  let directions: string = linesArray[0];
  linesArray.shift();
  linesArray.shift();

  const maps: Record<string, string[]> = {};

  for (const line of linesArray) {
    let [location, leftRight]: [string, string] = line
      .split("=")
      .map((e) => e.replaceAll(" ", ""));
    leftRight = leftRight.replaceAll(")", "");
    leftRight = leftRight.replaceAll("(", "");
    const [left, right] = leftRight.split(",");
    maps[location] = [left, right];
  }


  let stepsCount = 0;
  let answerFound = false;
  let currentLocation = "AAA";


  while (!answerFound) {
    for (const direction of directions) {
      stepsCount++;
      if (direction === "R") {
        currentLocation = maps[currentLocation][1];
      } else {
        currentLocation = maps[currentLocation][0];
      }
      if (currentLocation === "ZZZ") {
        answerFound = true;
        break;
      }
    }
  }

  console.log(stepsCount);
}

main(readfile("example8.txt"));

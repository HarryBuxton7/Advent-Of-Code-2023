import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(linesArray) {
  let ashArray = [];
  let tempArray = [];
  for (const line of linesArray) {
    if (line.length === 0) {
      ashArray.push(tempArray);
      tempArray = [];
      continue;
    }
    tempArray.push(line);
  }
  ashArray.push(tempArray);

  let horizontalScore = 0;

  for (const line of ashArray) {
    console.log("//////////////////////////");
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] == line[i + 1]) {
        let reflection = true;
        for (let j = 1; j < line.length; j++) {
          if (i - j >= 0 && i + j + 1 <= line.length - 1) {
            if (line[i + j + 1] !== line[i - j]) {
              reflection = false;
            }
          }
        }
        if (reflection) {
          horizontalScore += (i + 1) * 100;
        }
      }
    }
  }
  console.log(horizontalScore);
  const reversedAshArray = [];
  for (const line of ashArray) {
    reversedAshArray.push(inverseArray(line));
  }

  console.log("===========");
  for (const line of reversedAshArray) {
    console.log("//////////////////////////");
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] == line[i + 1]) {
        let reflection = true;
        for (let j = 1; j < line.length; j++) {
          if (i - j >= 0 && i + j + 1 <= line.length - 1) {
            if (line[i + j + 1] !== line[i - j]) {
              reflection = false;
            }
          }
        }
        if (reflection) {
          horizontalScore += i + 1;
        }
      }
    }
  }
  console.log(horizontalScore);
}

function inverseArray(originalArray: string[]) {
  let inversedArray: string[] = [];
  for (let i = 0; i < originalArray[0].length; i++) {
    let tempString = "";
    for (let j = 0; j < originalArray.length; j++) {
      tempString += originalArray[j][i];
    }
    inversedArray.push(tempString);
  }
  return inversedArray;
}

main(readfile("example13.txt"));

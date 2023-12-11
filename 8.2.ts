import { dir } from "console";
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
  let currentLocations: string[] = [];
  for (const line of linesArray) {
    let [location, leftRight]: [string, string] = line
      .split("=")
      .map((e) => e.replaceAll(" ", ""));
    leftRight = leftRight.replaceAll(")", "");
    leftRight = leftRight.replaceAll("(", "");
    const [left, right] = leftRight.split(",");
    maps[location] = [left, right];
    if (location[2] === "A") {
      currentLocations.push(location);
    }
  }

  let stepsCount = 0;
  let converged = false;

  // 0: 20221
  // 1: 13019
  // 2: 19667
  // 3: 14681
  // 4: 18559
  // 5: 16897

  console.log("//////////");
  currentLocations = [currentLocations[0]];
  //do this for index 0,1,2,3,4,5 to get the first value logged:
  // 0: 20221
  // 1: 13019
  // 2: 19667
  // 3: 14681
  // 4: 18559
  // 5: 16897
  while (!converged) {
    if (stepsCount > 200000) {
      break;
    }
    for (const direction of directions) {
      if (converged) {
        break;
      }
      stepsCount++;
      converged = true;
      for (let i = 0; i < currentLocations.length; i++) {
        if (direction === "R") {
          currentLocations[i] = maps[currentLocations[i]][1];
          if (currentLocations[i][2] !== "Z") {
            converged = false;
          }
        } else {
          currentLocations[i] = maps[currentLocations[i]][0];
          if (currentLocations[i][2] !== "Z") {
            converged = false;
          }
        }
      }
      if (currentLocations[0][2] === "Z") {
        console.log(stepsCount);
      }
      if (converged) {
        console.log(stepsCount);
        break;
      }
    }
  }

  let numbers = [20221, 13019, 19667, 14681, 18559, 16897]; //first value console logged from the process
  // 0: 20221
  // 1: 13019
  // 2: 19667
  // 3: 14681
  // 4: 18559
  // 5: 16897
  let countingNumber = 20221;
  let uniques = 0;
  let answerFound = false
  while (!answerFound) {
    countingNumber += 20221;
    for (const number of numbers) {
      if (countingNumber % number === 0) {
        uniques++;
      }
    }
    if (uniques === 6) {
      console.log(countingNumber); //answer
      answerFound = true
    }
    uniques = 0;
  }
}

main(readfile("example8.txt"));

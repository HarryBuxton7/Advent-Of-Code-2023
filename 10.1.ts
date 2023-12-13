import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(linesArray) {
  const mapGrid: string[][] = [];
  for (const line of linesArray) {
    let charArray = [];
    for (const char of line) {
      charArray.push(char);
    }
    mapGrid.push(charArray);
  }
  let [currentPositionX, currentPositionY] = findStartingCoordinates(mapGrid);
  let completedLoop = false;
  let stepsCount = 0;
  let previousPositionY: number;
  let previousPositionX: number;
  while (!completedLoop) {
    stepsCount++;
    console.log("while");
    if (previousPositionY !== undefined) {
      console.log(mapGrid[previousPositionY][previousPositionX]);
    }
    console.log(mapGrid[currentPositionY][currentPositionX]);

    if (previousPositionY === undefined) {
      switch (mapGrid[currentPositionY - 1][currentPositionX]) {
        case "|":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
          break;
        case "7":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
          break;

        case "F":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
          break;
      }
      if (previousPositionX) {
        continue;
      }
      switch (mapGrid[currentPositionY + 1][currentPositionX]) {
        case "|":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
          break;
        case "L":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
          break;

        case "J":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
          break;
      }
      if (previousPositionX) {
        continue;
      }
      switch (mapGrid[currentPositionY][currentPositionX - 1]) {
        case "-":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
          break;

        case "F":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
          break;

        case "L":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
          break;
      }
      if (previousPositionX) {
        continue;
      }
      switch (mapGrid[currentPositionY][currentPositionX + 1]) {
        case "-":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
          break;

        case "J":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
          break;

        case "7":
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
          break;
      }
      continue;
    }

    switch (mapGrid[currentPositionY][currentPositionX]) {
      case "|":
        if (currentPositionY + 1 === previousPositionY) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
        }
        break;
      case "-":
        if (currentPositionX + 1 === previousPositionX) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
        }
        break;
      case "L":
        if (currentPositionY - 1 === previousPositionY) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
        }
        break;
      case "J":
        if (currentPositionY - 1 === previousPositionY) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY -= 1;
        }
        break;
      case "7":
        if (currentPositionY + 1 === previousPositionY) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX -= 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
        }
        break;
      case "F":
        if (currentPositionY + 1 === previousPositionY) {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionX += 1;
        } else {
          previousPositionX = currentPositionX;
          previousPositionY = currentPositionY;
          currentPositionY += 1;
        }
        break;
    }
    if (mapGrid[currentPositionY][currentPositionX] === "S") {
      completedLoop = true;
      break;
    }
  }
  console.log("steps count " + stepsCount / 2);
}

function findStartingCoordinates(mapGrid: string[][]) {
  for (let y = 0; y < mapGrid.length; y++) {
    for (let x = 0; x < mapGrid[y].length; x++) {
      if (mapGrid[y][x] === "S") {
        return [x, y];
      }
    }
  }
}

main(readfile("example10.txt"));

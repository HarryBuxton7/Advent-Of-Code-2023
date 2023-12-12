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
  const [currentYPosition, currentXPosition] = findStartingCoordinates(mapGrid);
  let completedLoop = false
  let stepsCount = 0
  while (!completedLoop){
    //check viability for each 8 directions (south, southwest, west, northwest, north, northeast, east, southeast)
    //when checkViability returns true move currentPosition to that position
    stepsCount++
  }
}

function findStartingCoordinates(mapGrid: string[][]) {
  for (let y = 0; y < mapGrid.length; y++) {
    for (let x = 0; x < mapGrid[y].length; x++) {
      if (mapGrid[y][x] === "S") {
        return [y, x];
      }
    }
  }
}

function checkViability(previousPosition: number[], newPosition: number[]) {
}

main(readfile("example10.txt"));

import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(galaxyRows: string[]) {
  galaxyRows = expandUniverse(galaxyRows);
  const galaxyCoordinates: Record<number, number[]> = {};
  let galaxyCount = 0;
  for (let i = 0; i < galaxyRows.length; i++) {
    if (!galaxyRows[i].includes("#")) {
      continue;
    }
    for (let j = 0; j < galaxyRows[i].length; j++) {
      if (galaxyRows[i][j] === "#") {
        galaxyCount++;
        galaxyCoordinates[galaxyCount] = [i, j];
      }
    }
  }

  const galaxyPairs: number[][] = [];
  const galaxyList = Object.keys(galaxyCoordinates);
  for (let i = 0; i < galaxyList.length; i++) {
    for (let j = i + 1; j < galaxyList.length; j++) {
      galaxyPairs.push([i + 1, j + 1]);
    }
  }
  let sum = 0;
  for (const galaxyPair of galaxyPairs) {
    const [galaxy1, galaxy2] = galaxyPair;
    let [x0, y0] = galaxyCoordinates[galaxy1];
    let [x1, y1] = galaxyCoordinates[galaxy2];
    let count = 0;
    while (Math.abs(x0 - x1) !== 0) {
      if (x0 > x1) {
        x0--;
      } else {
        x0++;
      }
      if (galaxyRows[x0][y0] === "e") {
        count += 1000000;
      } else {
        count++;
      }
    }
    while (Math.abs(y0 - y1) !== 0) {
      if (y0 > y1) {
        y0--;
      } else {
        y0++;
      }
      if (galaxyRows[x0][y0] === "e") {
        count += 1000000;
      } else {
        count++;
      }
    }
    sum += count;
  }

  console.log(sum);
}

function expandUniverse(galaxyRows: string[]) {
  galaxyRows = markExpandedRows(galaxyRows);
  let galaxyColumns = inverseArray(galaxyRows);
  galaxyColumns = markExpandedRows(galaxyColumns);
  galaxyRows = inverseArray(galaxyColumns);
  return galaxyRows;
}

function markExpandedRows(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i].includes("#")) {
      array[i] = array[i].replaceAll(".", "e");
      i++;
    }
  }
  return array;
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

main(readfile("example11.txt"));

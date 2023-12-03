var lineReader = require("line-reader");

let lineArray: string[] = [];
let notAdjacentNumbers: string[] = [];
lineReader.eachLine("./example3.1.txt", (line: string, last: boolean) => {
  lineArray.push(line);
  if (last) {
    let currentNumber: string = "";
    let adjacent = false;
    for (let i: number = 0; i < lineArray.length; i++) {
      for (let j: number = 0; j < lineArray[i].length; j++) {
        if (isNaN(parseInt(lineArray[i][j]))) {
          if (adjacent === true && currentNumber.length > 0) {
            notAdjacentNumbers.push(currentNumber);
          }
          currentNumber = "";
          adjacent = false;
          continue;
        }
        currentNumber += lineArray[i][j];
        if (
          lineArray[i][j - 1] !== "." &&
          isNaN(parseInt(lineArray[i][j - 1])) &&
          lineArray[i][j - 1] !== undefined
        ) {
          adjacent = true;
        }
        if (
          lineArray[i][j + 1] !== "." &&
          isNaN(parseInt(lineArray[i][j + 1])) &&
          lineArray[i][j + 1] !== undefined
        ) {
          adjacent = true;
        }
        try {
          if (
            lineArray[i + 1][j - 1] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j - 1])) &&
            lineArray[i + 1][j - 1] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
        try {
          if (
            lineArray[i + 1][j + 1] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j + 1])) &&
            lineArray[i + 1][j + 1] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
        try {
          if (
            lineArray[i + 1][j] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j])) &&
            lineArray[i + 1][j] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j - 1] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j - 1])) &&
            lineArray[i - 1][j - 1] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j + 1] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j + 1])) &&
            lineArray[i - 1][j + 1] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j])) &&
            lineArray[i - 1][j] !== undefined
          ) {
            adjacent = true;
          }
        } catch (err) {}
      }
    }
    console.log(
      notAdjacentNumbers
        .map((e) => parseInt(e))
        .reduce((acc, value) => acc + value)
    );
  }
});


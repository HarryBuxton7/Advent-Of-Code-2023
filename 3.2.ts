var lineReader = require("line-reader");

let lineArray: string[] = [];
let notAdjacentNumbers: string[] = [];
lineReader.eachLine("./input3.txt", (line: string, last: boolean) => {
  lineArray.push(line);
  if (last) {
    let currentNumber: string = "";
    let gear: boolean = false;
    let gearCords: string = "";
    const gearNumbers = new Map();
    for (let i: number = 0; i < lineArray.length; i++) {
      for (let j: number = 0; j < lineArray[i].length; j++) {
        if (isNaN(parseInt(lineArray[i][j]))) {
          if (gear) {
            if (gearNumbers.has(gearCords)) {
              gearNumbers.set(gearCords, [
                ...gearNumbers.get(gearCords),
                currentNumber,
              ]);
            } else {
              gearNumbers.set(gearCords, [currentNumber]);
            }
            gearCords = "";
            gear = false;
          }
          currentNumber = "";
          continue;
        }
        currentNumber += lineArray[i][j];
        if (
          lineArray[i][j - 1] !== "." &&
          isNaN(parseInt(lineArray[i][j - 1])) &&
          lineArray[i][j - 1] !== undefined
        ) {
          if (lineArray[i][j - 1] === "*") {
            gear = true;
            gearCords = i.toString() + "//" + (j - 1).toString();
          }
        }
        if (
          lineArray[i][j + 1] !== "." &&
          isNaN(parseInt(lineArray[i][j + 1])) &&
          lineArray[i][j + 1] !== undefined
        ) {
          if (lineArray[i][j + 1] === "*") {
            gear = true;
            gearCords = i.toString() + "//" + (j + 1).toString();
          }
        }
        try {
          if (
            lineArray[i + 1][j - 1] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j - 1])) &&
            lineArray[i + 1][j - 1] !== undefined
          ) {
            if (lineArray[i + 1][j - 1] === "*") {
              gear = true;
              gearCords = (i + 1).toString() + "//" + (j - 1).toString();
            }
          }
        } catch (err) {}
        try {
          if (
            lineArray[i + 1][j + 1] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j + 1])) &&
            lineArray[i + 1][j + 1] !== undefined
          ) {
            if (lineArray[i + 1][j + 1] === "*") {
              gear = true;
              gearCords = (i + 1).toString() + "//" + (j + 1).toString();
            }
          }
        } catch (err) {}
        try {
          if (
            lineArray[i + 1][j] !== "." &&
            isNaN(parseInt(lineArray[i + 1][j])) &&
            lineArray[i + 1][j] !== undefined
          ) {
            if (lineArray[i + 1][j] === "*") {
              gear = true;
              gearCords = (i + 1).toString() + "//" + j.toString();
            }
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j - 1] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j - 1])) &&
            lineArray[i - 1][j - 1] !== undefined
          ) {
            if (lineArray[i - 1][j - 1] === "*") {
              gear = true;
              gearCords = (i - 1).toString() + "//" + (j - 1).toString();
            }
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j + 1] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j + 1])) &&
            lineArray[i - 1][j + 1] !== undefined
          ) {
            if (lineArray[i - 1][j + 1] === "*") {
              gear = true;
              gearCords = (i - 1).toString() + "//" + (j + 1).toString();
            }
          }
        } catch (err) {}
        try {
          if (
            lineArray[i - 1][j] !== "." &&
            isNaN(parseInt(lineArray[i - 1][j])) &&
            lineArray[i - 1][j] !== undefined
          ) {
            if (lineArray[i - 1][j] === "*") {
              gear = true;
              gearCords = (i - 1).toString() + "//" + j.toString();
            }
          }
        } catch (err) {}
      }
    }
    let sum: number = 0;
    gearNumbers.forEach((value, key) => {
      if (value.length === 2) {
        sum += parseInt(value[0]) * parseInt(value[1]);
      }
    });
    console.log(sum);
  }
});

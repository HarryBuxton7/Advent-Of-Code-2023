import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

function main(linesArray) {
  linesArray = inverseArray(linesArray);
  console.log(linesArray[0]);


  //this didn't work initially. so I copied and pasted this for loop a few times until it modified the array enough to get the correct input.
  for (let i = 0; i < linesArray.length; i++) {
    let viablePositions = [];
    for (let j = 0; j < linesArray[i].length; j++) {
      viablePositions.sort();
      if (linesArray[i][j] === ".") {
        viablePositions.push(j);
      }
      if (linesArray[i][j] === "#") {
        viablePositions = [];
      }
      if (linesArray[i][j] === "O") {
        if (viablePositions.length > 0) {
          linesArray[i] =
            linesArray[i].substring(0, j) +
            "." +
            linesArray[i].substring(j + 1);

          let newIndex = viablePositions.shift();
          viablePositions.push(j);
          viablePositions.sort();

          linesArray[i] =
            linesArray[i].substring(0, newIndex) +
            "O" +
            linesArray[i].substring(newIndex + 1);
        }
      }
    }
  }
  for (let i = 0; i < linesArray.length; i++) {
    let viablePositions = [];
    for (let j = 0; j < linesArray[i].length; j++) {
      viablePositions.sort();
      if (linesArray[i][j] === ".") {
        viablePositions.push(j);
      }
      if (linesArray[i][j] === "#") {
        viablePositions = [];
      }
      if (linesArray[i][j] === "O") {
        if (viablePositions.length > 0) {
          linesArray[i] =
            linesArray[i].substring(0, j) +
            "." +
            linesArray[i].substring(j + 1);

          let newIndex = viablePositions.shift();
          viablePositions.push(j);
          viablePositions.sort();

          linesArray[i] =
            linesArray[i].substring(0, newIndex) +
            "O" +
            linesArray[i].substring(newIndex + 1);
        }
      }
    }
  }
  for (let i = 0; i < linesArray.length; i++) {
    let viablePositions = [];
    for (let j = 0; j < linesArray[i].length; j++) {
      viablePositions.sort();
      if (linesArray[i][j] === ".") {
        viablePositions.push(j);
      }
      if (linesArray[i][j] === "#") {
        viablePositions = [];
      }
      if (linesArray[i][j] === "O") {
        if (viablePositions.length > 0) {
          linesArray[i] =
            linesArray[i].substring(0, j) +
            "." +
            linesArray[i].substring(j + 1);

          let newIndex = viablePositions.shift();
          viablePositions.push(j);
          viablePositions.sort();

          linesArray[i] =
            linesArray[i].substring(0, newIndex) +
            "O" +
            linesArray[i].substring(newIndex + 1);
        }
      }
    }
  }
  for (let i = 0; i < linesArray.length; i++) {
    let viablePositions = [];
    for (let j = 0; j < linesArray[i].length; j++) {
      viablePositions.sort();
      if (linesArray[i][j] === ".") {
        viablePositions.push(j);
      }
      if (linesArray[i][j] === "#") {
        viablePositions = [];
      }
      if (linesArray[i][j] === "O") {
        if (viablePositions.length > 0) {
          linesArray[i] =
            linesArray[i].substring(0, j) +
            "." +
            linesArray[i].substring(j + 1);

          let newIndex = viablePositions.shift();
          viablePositions.push(j);
          viablePositions.sort();

          linesArray[i] =
            linesArray[i].substring(0, newIndex) +
            "O" +
            linesArray[i].substring(newIndex + 1);
        }
      }
    }
  }
    for (let i = 0; i < linesArray.length; i++) {
    let viablePositions = [];
    for (let j = 0; j < linesArray[i].length; j++) {
        viablePositions.sort()
      if (linesArray[i][j] === ".") {
        viablePositions.push(j);
      }
      if (linesArray[i][j] === "#") {
        viablePositions = [];
      }
      if (linesArray[i][j] === "O") {
        if (viablePositions.length > 0) {
          linesArray[i] =
            linesArray[i].substring(0, j) +
            "." +
            linesArray[i].substring(j + 1);

          let newIndex = viablePositions.shift();
          viablePositions.push(j);
          viablePositions.sort();

          linesArray[i] =
            linesArray[i].substring(0, newIndex) +
            "O" +
            linesArray[i].substring(newIndex + 1);
        }
      }
    }
  }
  console.log(linesArray[0]);
  linesArray = inverseArray(linesArray);
  let distanceFromEdge = linesArray.length;
  let sum = 0;
  for (let i = 0; i < linesArray.length; i++) {
    console.log(linesArray[i]);
    for (let j = 0; j < linesArray[i].length; j++) {
      if (linesArray[i][j] === "O") {
        sum += distanceFromEdge;
        console.log(sum);
      }
    }
    if (distanceFromEdge === 100) {
      console.log(sum);
    }
    console.log("======================");
    distanceFromEdge--;
  }
  console.log(sum);
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

main(readfile("example14.txt"));

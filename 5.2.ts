var lineReader = require("line-reader");

let seedsArray: string[];
let seedsAndRanges = [];
const mapsArray: string[] = [];

lineReader.eachLine("./example5.1.txt", (line: string, last: boolean) => {
  if (line.length === 0) {
    return;
  }
  if (line.includes("seeds:")) {
    seedsArray = line.split(" ");
    seedsArray.shift();
    for (let i = 0; i < seedsArray.length; i++) {
      seedsAndRanges.push([seedsArray[i], seedsArray[i + 1]]);
      i++;
    }
    return;
  }
  mapsArray.push(line);

  if (last) {
    let lowestInterval = 100000000000000000000000000000000000000000000000000000000000000;
    seedsAndRanges.forEach((seedAndRange) => {
      seedAndRange = seedAndRange.map((e) => parseInt(e));
      seedAndRange[1] = seedAndRange[0] + seedAndRange[1] - 1;
      let currentIntervals = [];
      let converts = [];
      currentIntervals.push(seedAndRange);
      mapsArray.forEach((line) => {
        if (line.includes(":")) {
          console.log(line);
          console.log("converts: " + converts);
          converts.forEach((e) => {
            currentIntervals.push(e);
          });
          converts = [];
          return;
        }
        let [destinationStart, sourceStart, range] = line
          .split(" ")
          .map((e) => parseInt(e));
        let converterInterval = [sourceStart, sourceStart + range - 1];
        let newIntervals = [];
        currentIntervals.forEach((currentInterval) => {
          let [overlapping, first, second, isOverlappingtrue] =
            findOverlappingInterval(currentInterval, converterInterval);
          if (isOverlappingtrue) {
            if (overlapping) {
              let convertedOverlapping = overlapping.map((e) => {
                if (sourceStart > destinationStart) {
                  return e - Math.abs(sourceStart - destinationStart);
                } else {
                  return e + Math.abs(sourceStart - destinationStart);
                }
              });
              converts.push(convertedOverlapping);
            }
          } else {
            newIntervals.push(overlapping);
          }

          if (first) {
            newIntervals.push(first);
          }
          if (second) {
            newIntervals.push(second);
          }
        });
        console.log(line);
        console.log(...newIntervals);
        currentIntervals = newIntervals;
      });
      console.log("+++++++++===================+++");
      currentIntervals.forEach((e) => {
        if (Math.min(...e) < lowestInterval) {
          lowestInterval = Math.min(...e);
        }
      });
      converts.forEach((e) => {
        if (Math.min(...e) < lowestInterval) {
          lowestInterval = Math.min(...e);
        }
      });
    });
    console.log(lowestInterval);
  }
});

function findOverlappingInterval(seedInterval, converterInterval) {
  if (seedInterval[0] > seedInterval[1]) {
    seedInterval.reverse();
  }
  const [a, b] = seedInterval;
  const [x, y] = converterInterval;
  if (Math.max(a, b) < Math.min(x, y)) {
    return [seedInterval, null, null, false];
  }
  if (Math.min(a, b) > Math.max(x, y)) {
    return [seedInterval, null, null, false];
  }
  let overlapping = [Math.max(a, x), Math.min(b, y)];
  if (overlapping[0] > overlapping[1]) {
    overlapping.reverse();
  }
  let firstLeftoverInterval = null;
  let secondLeftoverInterval = null;
  if (a < overlapping[0]) {
    firstLeftoverInterval = [a, overlapping[0] - 1];
  }
  if (b > overlapping[1]) {
    secondLeftoverInterval = [overlapping[1] + 1, b];
  }
  return [overlapping, firstLeftoverInterval, secondLeftoverInterval, true];
}

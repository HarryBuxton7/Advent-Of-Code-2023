var lineReader = require("line-reader");

let seedsArray: string[];
const mapsArray: string[] = [];

lineReader.eachLine("./example5.1.txt", (line: string, last: boolean) => {
  if (line.length === 0) {
    return;
  }
  if (line.includes("seeds:")) {
    seedsArray = line.split(" ");
    seedsArray.shift();
    return;
  }
  mapsArray.push(line);

  if (last) {
    let lowestSeed = 9000000000000000;
    seedsArray.forEach((seedString) => {
      let seed = parseInt(seedString);
      let transferredSeed = false;
      mapsArray.forEach((line) => {
        if (line.includes(":")) {
          transferredSeed = false;
          return;
        }
        if (transferredSeed === true) {
          return;
        }
        let [destinationStart, sourceStart, range] = line
          .split(" ")
          .map((e) => parseInt(e));
        if (seed >= sourceStart && seed < sourceStart + range) {
          seed = destinationStart + (seed - sourceStart);
          transferredSeed = true;
        }
      });
      if (seed < lowestSeed) {
        lowestSeed = seed;
      }
    });
    console.log(lowestSeed);
  }
});

//if (/\d/.test(line)) {

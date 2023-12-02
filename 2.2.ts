var lineReader = require("line-reader");

let sum: number = 0;

lineReader.eachLine("./input2.txt", (line: string, last: boolean) => {
  let game: string[] = line.split(":");
  let set: string[] = game[1].split(";");

  let minRed: number = 0;
  let minBlue: number = 0;
  let minGreen: number = 0;

  for (let i: number = 0; i < set.length; i++) {
    let colours = set[i].split(",");
    colours.forEach((colourAndNumber) => {
      const [filler, number, colour] = colourAndNumber.split(" ");
      if (colour === "red") {
        if (parseInt(number) > minRed) {
          minRed = parseInt(number);
        }
      }
      if (colour === "blue") {
        if (parseInt(number) > minBlue) {
          minBlue = parseInt(number);
        }
      }
      if (colour === "green") {
        if (parseInt(number) > minGreen) {
          minGreen = parseInt(number);
        }
      }
    });
  }
  sum += minRed * minBlue * minGreen;

  if (last) {
    console.log(sum);
  }
});

var lineReader = require("line-reader");

let sum: number = 0;

lineReader.eachLine("./input2.txt", (line: string, last: boolean) => {
  let game: string[] = line.split(":");
  let [gameText, gameNumber] = game[0].split(" ");
  let set: string[] = game[1].split(";");
  let impossible: boolean = false;

  for (let i: number = 0; i < set.length; i++) {
    let colours = set[i].split(",");
    colours.forEach((colourAndNumber) => {
      const [filler, number, colour] = colourAndNumber.split(" ");
      if (colour === "red") {
        if (parseInt(number) > 12) {
          impossible = true;
        }
      }
      if (colour === "blue") {
        if (parseInt(number) > 14) {
          impossible = true;
        }
      }
      if (colour === "green") {
        if (parseInt(number) > 13) {
          impossible = true;
        }
      }
    });
  }
  if (impossible === false) {
    sum += parseInt(gameNumber);
  }
  if (last) {
    console.log(sum);
  }
});

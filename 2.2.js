"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var sum = 0;
lineReader.eachLine("./input2.txt", function (line, last) {
    var game = line.split(":");
    var set = game[1].split(";");
    var minRed = 0;
    var minBlue = 0;
    var minGreen = 0;
    for (var i = 0; i < set.length; i++) {
        var colours = set[i].split(",");
        colours.forEach(function (colourAndNumber) {
            var _a = colourAndNumber.split(" "), filler = _a[0], number = _a[1], colour = _a[2];
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
//# sourceMappingURL=2.2.js.map
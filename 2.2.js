"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var sum = 0;
lineReader.eachLine("./input2.txt", function (line, last) {
    var game = line.split(":");
    var _a = game[0].split(" "), gameText = _a[0], gameNumber = _a[1];
    var set = game[1].split(";");
    var impossible = false;
    for (var i = 0; i < set.length; i++) {
        var colours = set[i].split(",");
        colours.forEach(function (colourAndNumber) {
            var _a = colourAndNumber.split(" "), filler = _a[0], number = _a[1], colour = _a[2];
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
//# sourceMappingURL=2.2.js.map
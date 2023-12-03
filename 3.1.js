"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var lineArray = [];
var notAdjacentNumbers = [];
lineReader.eachLine("./example3.1.txt", function (line, last) {
    lineArray.push(line);
    if (last) {
        var currentNumber = "";
        var adjacent = false;
        for (var i = 0; i < lineArray.length; i++) {
            for (var j = 0; j < lineArray[i].length; j++) {
                if (isNaN(parseInt(lineArray[i][j]))) {
                    if (adjacent === true && currentNumber.length > 0) {
                        notAdjacentNumbers.push(currentNumber);
                    }
                    currentNumber = "";
                    adjacent = false;
                    continue;
                }
                currentNumber += lineArray[i][j];
                if (lineArray[i][j - 1] !== "." &&
                    isNaN(parseInt(lineArray[i][j - 1])) &&
                    lineArray[i][j - 1] !== undefined) {
                    adjacent = true;
                }
                if (lineArray[i][j + 1] !== "." &&
                    isNaN(parseInt(lineArray[i][j + 1])) &&
                    lineArray[i][j + 1] !== undefined) {
                    adjacent = true;
                }
                try {
                    if (lineArray[i + 1][j - 1] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j - 1])) &&
                        lineArray[i + 1][j - 1] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i + 1][j + 1] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j + 1])) &&
                        lineArray[i + 1][j + 1] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i + 1][j] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j])) &&
                        lineArray[i + 1][j] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j - 1] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j - 1])) &&
                        lineArray[i - 1][j - 1] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j + 1] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j + 1])) &&
                        lineArray[i - 1][j + 1] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j])) &&
                        lineArray[i - 1][j] !== undefined) {
                        adjacent = true;
                    }
                }
                catch (err) { }
            }
        }
        console.log(notAdjacentNumbers
            .map(function (e) { return parseInt(e); })
            .reduce(function (acc, value) { return acc + value; }));
    }
});
//# sourceMappingURL=3.1.js.map
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var lineArray = [];
var notAdjacentNumbers = [];
lineReader.eachLine("./input3.txt", function (line, last) {
    lineArray.push(line);
    if (last) {
        var currentNumber = "";
        var gear = false;
        var gearCords = "";
        var gearNumbers = new Map();
        for (var i = 0; i < lineArray.length; i++) {
            for (var j = 0; j < lineArray[i].length; j++) {
                if (isNaN(parseInt(lineArray[i][j]))) {
                    if (gear) {
                        if (gearNumbers.has(gearCords)) {
                            gearNumbers.set(gearCords, __spreadArray(__spreadArray([], gearNumbers.get(gearCords), true), [
                                currentNumber,
                            ], false));
                        }
                        else {
                            gearNumbers.set(gearCords, [currentNumber]);
                        }
                        gearCords = "";
                        gear = false;
                    }
                    currentNumber = "";
                    continue;
                }
                currentNumber += lineArray[i][j];
                if (lineArray[i][j - 1] !== "." &&
                    isNaN(parseInt(lineArray[i][j - 1])) &&
                    lineArray[i][j - 1] !== undefined) {
                    if (lineArray[i][j - 1] === "*") {
                        gear = true;
                        gearCords = i.toString() + "//" + (j - 1).toString();
                    }
                }
                if (lineArray[i][j + 1] !== "." &&
                    isNaN(parseInt(lineArray[i][j + 1])) &&
                    lineArray[i][j + 1] !== undefined) {
                    if (lineArray[i][j + 1] === "*") {
                        gear = true;
                        gearCords = i.toString() + "//" + (j + 1).toString();
                    }
                }
                try {
                    if (lineArray[i + 1][j - 1] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j - 1])) &&
                        lineArray[i + 1][j - 1] !== undefined) {
                        if (lineArray[i + 1][j - 1] === "*") {
                            gear = true;
                            gearCords = (i + 1).toString() + "//" + (j - 1).toString();
                        }
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i + 1][j + 1] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j + 1])) &&
                        lineArray[i + 1][j + 1] !== undefined) {
                        if (lineArray[i + 1][j + 1] === "*") {
                            gear = true;
                            gearCords = (i + 1).toString() + "//" + (j + 1).toString();
                        }
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i + 1][j] !== "." &&
                        isNaN(parseInt(lineArray[i + 1][j])) &&
                        lineArray[i + 1][j] !== undefined) {
                        if (lineArray[i + 1][j] === "*") {
                            gear = true;
                            gearCords = (i + 1).toString() + "//" + j.toString();
                        }
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j - 1] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j - 1])) &&
                        lineArray[i - 1][j - 1] !== undefined) {
                        if (lineArray[i - 1][j - 1] === "*") {
                            gear = true;
                            gearCords = (i - 1).toString() + "//" + (j - 1).toString();
                        }
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j + 1] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j + 1])) &&
                        lineArray[i - 1][j + 1] !== undefined) {
                        if (lineArray[i - 1][j + 1] === "*") {
                            gear = true;
                            gearCords = (i - 1).toString() + "//" + (j + 1).toString();
                        }
                    }
                }
                catch (err) { }
                try {
                    if (lineArray[i - 1][j] !== "." &&
                        isNaN(parseInt(lineArray[i - 1][j])) &&
                        lineArray[i - 1][j] !== undefined) {
                        if (lineArray[i - 1][j] === "*") {
                            gear = true;
                            gearCords = (i - 1).toString() + "//" + j.toString();
                        }
                    }
                }
                catch (err) { }
            }
        }
        var sum_1 = 0;
        gearNumbers.forEach(function (value, key) {
            if (value.length === 2) {
                sum_1 += parseInt(value[0]) * parseInt(value[1]);
            }
        });
        console.log(sum_1);
    }
});
//# sourceMappingURL=3.2.js.map
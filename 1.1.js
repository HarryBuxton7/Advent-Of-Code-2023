"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var sum = 0;
lineReader.eachLine("./input1.txt", function (line, last) {
    var number = line.replace(/[^0-9]/g, "");
    if (number.length == 2) {
        sum += parseInt(number);
    }
    if (number.length === 1) {
        number = number + number;
        sum += parseInt(number);
    }
    if (number.length > 2) {
        var newNumber = number[0] + number[number.length - 1];
        sum += parseInt(newNumber);
    }
    if (last) {
        console.log(sum);
    }
});
//# sourceMappingURL=1.1.js.map
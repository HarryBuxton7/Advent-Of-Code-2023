"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineReader = require("line-reader");
var sum = 0;
lineReader.eachLine("./input1.txt", function (line, last) {
    var numbers = [];
    var wordNumber = "";
    for (var i = 0; i < line.length; i++) {
        if (!isNaN(parseInt(line[i]))) {
            numbers.push(line[i]);
        }
        else {
            wordNumber += line[i];
            if (wordNumber.includes("one")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("1");
            }
            if (wordNumber.includes("two")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("2");
            }
            if (wordNumber.includes("three")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("3");
            }
            if (wordNumber.includes("four")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("4");
            }
            if (wordNumber.includes("five")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("5");
            }
            if (wordNumber.includes("six")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("6");
            }
            if (wordNumber.includes("seven")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("7");
            }
            if (wordNumber.includes("eight")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("8");
            }
            if (wordNumber.includes("nine")) {
                wordNumber = wordNumber[wordNumber.length - 1];
                numbers.push("9");
            }
        }
    }
    if (numbers.length === 1) {
        sum += parseInt(numbers[0] + numbers[0]);
    }
    else {
        sum += parseInt(numbers[0] + numbers[numbers.length - 1]);
    }
    if (last) {
        console.log(sum); //55360
    }
});
//# sourceMappingURL=1.2.js.map
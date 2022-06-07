"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ?LIST OF ALL PROBLEMS SOLVED
// !PERSISTANCE
// !The Actual Memory Size of your USB Flash Drive
// !PRODUCTS OF DIGITS OF SUM
// !BALANCED WORDS
// !Combine Two Objects Into One, Summing Like Values
// !A Periodic Series
// !Data Structures (1): Find Max of Sliding Window
// !Headline Hash Tags
// !Maximize the First Number
// !Lemonade Stand
// !Track the Robot (Part 2)
// *PERSISTANCE STARTS HERE
// ?The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
// ?The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
// ?Create two functions that take an integer as an argument and:
// ?Return its additive persistence.
// ?Return its multiplicative persistence.
function additivePersistance(n) {
    let iteration = 0;
    if (n < 9) {
        iteration = 0;
        console.log(`It takes ${iteration} iteration to reach a single-digit number.`);
        return;
    }
    else {
        runIteration(n);
    }
    function runIteration(integer) {
        iteration = iteration + 1;
        let nArray = numberToArray(integer);
        let total = 0;
        nArray.forEach((item) => {
            total = total + +item;
        });
        checkNos(total);
    }
    function checkNos(number) {
        if (number > 9) {
            runIteration(number);
        }
        else {
            console.log(`It takes ${iteration} iterations to reach a single-digit number.`);
        }
    }
}
function multiplyPersistance(n) {
    let iteration = 0;
    if (n < 9) {
        iteration = 0;
        console.log(`It takes ${iteration} iteration to reach a single-digit number.`);
        return;
    }
    else {
        runIteration(n);
    }
    function runIteration(integer) {
        iteration = iteration + 1;
        let nArray = numberToArray(integer);
        let total = 1;
        nArray.forEach((item) => {
            total = total * +item;
        });
        checkNos(total);
    }
    function checkNos(number) {
        if (number > 9) {
            runIteration(number);
        }
        else {
            console.log(`It takes ${iteration} iterations to reach a single-digit number.`);
        }
    }
}
function numberToArray(num) {
    let newArray = num.toString().split("");
    newArray = newArray.map((item) => +item);
    return newArray;
}
additivePersistance(1679583);
multiplyPersistance(123456);
// *PERSISTANCE ENDS STARTS HERE
// *The Actual Memory Size of your USB Flash Drive STARTS HERE
// ?Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.
function actualMemorySize(size) {
    let nos = parseInt(size);
    let string = size.slice(size.length - 2, size.length);
    let totalSize = nos - nos * 0.07;
    if (string.toLowerCase() === "mb") {
        totalSize = parseFloat(totalSize.toPrecision(3));
        console.log(`${totalSize}MB`);
    }
    else {
        totalSize = parseFloat(totalSize.toFixed(2));
        console.log(`${totalSize}GB`);
    }
}
actualMemorySize("512MB");
actualMemorySize("2GB");
actualMemorySize("32GB");
// *The Actual Memory Size of your USB Flash Drive ENDS HERE
// *PRODUCTS OF DIGITS OF SUM STARTS HERE
// ?Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.
function sumDigProd(...args) {
    let total = 0;
    args.forEach((item) => {
        total = total + item;
    });
    if (total < 9) {
        console.log(total);
    }
    else {
        runIteration(total);
    }
    function runIteration(integer) {
        let nArray = numberToArray(integer);
        let total = 1;
        nArray.forEach((item) => {
            total = total * +item;
        });
        checkNos(total);
    }
    function checkNos(number) {
        if (number > 9) {
            runIteration(number);
        }
        else {
            console.log(number);
        }
    }
}
sumDigProd(16, 28);
sumDigProd(0);
// *PRODUCTS OF DIGITS OF SUM ENDS HERE
// *BALANCED WORDS STARTS HERE
// ?We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
// ?Write a function that returns true if the word is balanced, and false if it's not.
const lettersArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
function balanced(word) {
    let lettersObject = {};
    lettersArray.forEach((item, index) => {
        lettersObject = Object.assign(Object.assign({}, lettersObject), { [item]: index + 1 });
    });
    let wordArray = word.split("");
    let middle = Math.floor(wordArray.length / 2);
    let firtsPart = wordArray.slice(0, middle);
    let secondPart = wordArray.slice(wordArray.length - middle, wordArray.length);
    let firstPartTotal = 0;
    let secondPartTotal = 0;
    firtsPart.forEach((item) => {
        firstPartTotal = firstPartTotal + lettersObject[item];
    });
    secondPart.forEach((item) => {
        secondPartTotal = secondPartTotal + lettersObject[item];
    });
    if (firstPartTotal === secondPartTotal) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
balanced("zips");
balanced("brake");
// *BALANCED WORDS ENDS HERE
// *Combine Two Objects Into One, Summing Like Values STARTS HERE
// ?Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.
function combineObject(obj1, obj2) {
    let newObject = Object.assign(Object.assign({}, obj1), obj2);
    Object.entries(obj1).forEach((item) => {
        if (obj2[item[0]]) {
            newObject = Object.assign(Object.assign({}, newObject), { [item[0]]: obj1[item[0]] + obj2[item[0]] });
        }
    });
    console.log(newObject);
}
combineObject({
    powerPlant: 70000,
    rental: 12000,
}, {
    teaching: 40000,
    rental: 10000,
});
combineObject({ pocketMoney: 1000, data: 3500, food: 1000 }, { data: 3500, transport: 500, food: 1000 });
// *Combine Two Objects Into One, Summing Like Values ENDS HERE
// *A Periodic Series STARTS HERE
// ?This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.
// ?Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.
function periodic(num) {
    let baseString = num;
    let length = num.length;
    let iteration = 1;
    let periodicArray = [baseString];
    if (length === 1) {
        console.log(iteration);
    }
    else {
        sumNos(num);
    }
    function sumNos(nos) {
        let numArray = nos.split("");
        let totalnum = 0;
        numArray.forEach((item) => {
            totalnum = totalnum + +item;
        });
        let string = totalnum.toString();
        baseString = `${baseString}${string}`;
        string = baseString.slice(baseString.length - length, baseString.length);
        checkArray(string);
    }
    function checkArray(string) {
        let done = periodicArray.some((item) => item === string);
        if (done) {
            console.log(periodicArray.length);
        }
        else {
            periodicArray.push(string);
            sumNos(string);
        }
    }
}
periodic("3061");
periodic("2");
periodic("02468");
// *A Periodic Series ENDS HERE
// *Data Structures (1): Find Max of Sliding Window STARTS HERE
// ?The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.
// ?Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.
function windowMaxes(array, windowLength) {
    let newArray = [];
    let maxIteration = array.length - windowLength;
    for (let i = 0; i < maxIteration + 1; i++) {
        newArray.push(Math.max(...array.slice(i, i + windowLength)));
    }
    console.log(newArray);
}
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3);
windowMaxes([4, 5, 6, 7, 8, 9], 2);
// *Data Structures (1): Find Max of Sliding Window ENDS HERE
// *Headline Hash Tags STARTS HERE
// ?Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
function getHashTags(headline) {
    console.log(headline);
    let array = headline.split(" ");
    let newArray = [];
    array = array.sort((a, b) => b.length - a.length);
    for (let i = 0; i < 3; i++) {
        if (array[i]) {
            newArray.push(`#${array[i].toLowerCase()}`);
        }
    }
    console.log(newArray);
}
getHashTags("How the Avocado Became the Fruit of the Global Trade");
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
// *Headline Hash Tags ENDS HERE
// *Maximize the First Number STARTS HERE
function maxPossible(num1, num2) {
    let firstArray = num1.toString().split("");
    let secondArray = num2.toString().split("");
    firstArray = toNumArray(firstArray);
    let secondNumArray = secondArray.map((item) => {
        return parseFloat(item);
    });
    let finalArray = [];
    firstArray.forEach((item) => {
        let maxNum = Math.max(+item, ...secondNumArray);
        let index = secondNumArray.indexOf(maxNum);
        if (index > -1) {
            secondNumArray.splice(index, 1);
        }
        finalArray.push(maxNum);
    });
    console.log(parseFloat(finalArray.join("")));
    function toNumArray(arr) {
        arr = arr.map((item) => +item);
        return arr;
    }
}
maxPossible(523, 76);
maxPossible(8732, 91255);
maxPossible(9132, 5564);
// *Maximize the First Number ENDS HERE
// *Lemonade Stand STARTS HERE
// ?At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// ?Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// ?Return true if and only if you can provide every customer with correct change.
function lemonade(price) {
    const nosOf5 = price.filter((item) => item === 5);
    let num = 0;
    price = price.map((item) => {
        num = item / 5 - 1;
        return item;
    });
    if (num > nosOf5.length) {
        console.log(false);
    }
    else {
        console.log(true);
    }
}
lemonade([5, 5, 5, 10, 20]);
lemonade([5, 5, 10, 10, 20]);
lemonade([5, 5, 10, 10]);
// *Lemonade Stand ENDS HERE
// *Track the Robot (Part 2) STARTS HERE
//? This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
//? To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
//? 20 steps North, now at (0, 20)
//? 30 steps East, now at (30, 20)
//? 10 steps South. now at (30, 10)
//? 40 steps West, now at (-10, 10)
//? ...and will end up at coordinates (-10, 10).
function trackRobot(...args) {
    let pos = 0;
    let coordinates = [0, 0];
    for (let i = 0; i < args.length; i++) {
        if (pos === 4)
            pos = 0;
        if (pos === 0) {
            coordinates[1] = coordinates[1] + args[i];
        }
        if (pos === 1) {
            coordinates[0] = coordinates[0] + args[i];
        }
        if (pos === 2) {
            coordinates[1] = coordinates[1] - args[i];
        }
        if (pos === 3) {
            coordinates[0] = coordinates[0] - args[i];
        }
        pos = pos + 1;
    }
    console.log(coordinates);
}
trackRobot(20, 30, 10, 40);
trackRobot(-10, 20, 10);
// *Track the Robot (Part 2) ENDS HERE

"use strict";
// const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function reverseArray(array: Array<number>) {
//   const reversedArray: Array<number> = [];
//   for (let i = 0; i < array.length; i++) {
//     reversedArray[i] = array[array.length - i - 1];
//   }
//   console.log(reversedArray);
// }
// function alternateReverse(array: Array<number>) {
//   const reversedArray: Array<number> = [];
//   const target = array.length;
//   let pos = 0;
//   while (pos < target) {
//     reversedArray[pos] = array[target - pos - 1];
//     pos += 1;
//   }
//   console.log(reversedArray);
// }
// reverseArray(newArray);
// alternateReverse(newArray);
// function isPrimeNumber(params: number) {
//   const half = Math.ceil(params / 2);
//   let primenumber = true;
//   for (let i = 2; i < half + 1; i++) {
//     if (params % i === 0) {
//       primenumber = false;
//     }
//   }
//   return primenumber;
// }
// isPrimeNumber(99);
// function fizzBuzz(a: number, b: number) {
//   for (let i = 1; i < 100; i++) {
//     let data = "";
//     if (i % a === 0) {
//       data += "fizz";
//     }
//     if (i % b === 0) {
//       data += "buzz";
//     }
//     if (i % a !== 0 && i % b !== 0) {
//       data = `${i}`;
//     }
//   }
// }
// fizzBuzz(3, 5);
// function getLength(array: Array<any>) {
//   function recursive(newArray: Array<any>) {
//     if (newArray.length === 0) {
//       return 0;
//     }
//     const filtered = newArray.filter((item) => typeof item !== "number");
//     const length = newArray.length - filtered.length;
//     let nextArray: Array<any> = [];
//     for (let i = 0; i < filtered.length; i++) {
//       nextArray = [...nextArray, ...filtered[i]];
//     }
//     return length + recursive(nextArray);
//   }
//   console.log(recursive(array));
// }
// getLength([1, [2, 3]]);
// getLength([1, [2, [3, [4, [5, 6]]]]]);
// const options = ["1", "3", "7", "9"];
// function checkRoundPrime() {
//   let total = 0;
//   for (let index = 2; index < 100; index++) {
//     if (
//       index.toString().length > 1 &&
//       options.includes(index.toString().slice(1, 2)) &&
//       options.includes(index.toString().slice(0, 1))
//     ) {
//       if (isPrimeNumber(index)) {
//         // console.log(index);
//         total += 1;
//       }
//     }
//   }
//   console.log(total);
// }
// const hello = "hello";
// // console.log(hello.slice(hello.length - 1, hello.length));
// // console.log(hello.includes("ll"));
// checkRoundPrime();
// function alternatePrime(num: number) {
//   const root = Math.sqrt(num);
//   if (num < 2) return false;
//   let isPrime = true;
//   for (let index = 2; index < root + 1; index++) {
//     if (num % index === 0) isPrime = false;
//   }
//   console.log(isPrime);
//   return isPrime;
// }
// alternatePrime(37);
// alternatePrime(539);
// alternatePrime(2);
// console.log(alternatePrime(2));
// function numConverter(num: number, base: number) {
//   let stringConverted = "";
//   if (num < 1 || base > 9) return 0;
//   let current = num;
//   do {
//     let s = current % base;
//     current = Math.floor(current / base);
//     stringConverted = `${s}` + stringConverted;
//   } while (current > 0);
//   console.log(parseInt(stringConverted));
// }
// numConverter(5, 2);
// numConverter(5, 3);
// numConverter(0, 4);
// numConverter(127, 8);
// function bracketChecker(word: string) {
//   const stack: Array<string> = [];
//   const data = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === "(" || word[i] === "{" || word[i] === "[") {
//       stack.push(word[i]);
//     } else if (stack[stack.length - 1] === data[word[i]]) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   if (stack.length !== 0) return false;
//   return true;
// }
// console.log(bracketChecker("({})"));
// console.log(bracketChecker("([)]"));
// console.log(document.getElementById("container")?.offsetHeight);
// const check = () => {
//   throw new Error("Oh, it's an error");
// };
// const hellox = (name = check()) => console.log(`hello_${name}`);
// hellox(undefined);
// function calculateEMAToday(
//   todayValue: number,
//   days: number,
//   EMAYesterday = 0,
//   smoothing = 2
// ) {
//   const smoothingValue = smoothing / (1 + days);
//   const EMA = todayValue * smoothingValue + EMAYesterday * (1 - smoothingValue);
//   return EMA;
// }
// console.log(calculateEMAToday(13715.65, 10));
function newF(arr) {
    const lengthsArr = Array(arr.length).fill(1);
    let prevIndex = 0;
    let currentIndex = 1;
    while (currentIndex < arr.length) {
        if (arr[prevIndex] < arr[currentIndex]) {
            const newLength = lengthsArr[prevIndex] + 1;
            if (newLength > lengthsArr[currentIndex]) {
                lengthsArr[currentIndex] = newLength;
            }
        }
        prevIndex += 1;
        if (prevIndex === currentIndex) {
            currentIndex += 1;
            prevIndex = 0;
        }
    }
    let longestIncreasing = 0;
    for (let i = 0; i < lengthsArr.length; i += 1) {
        if (lengthsArr[i] > longestIncreasing) {
            longestIncreasing = lengthsArr[i];
        }
    }
    return longestIncreasing;
}
function ShortestPath(strArr) {
    const numberOfNodes = Number(strArr.splice(0, 1));
    const nodes = strArr.splice(0, numberOfNodes);
    const connections = strArr.map(function (v) {
        return v.split("-");
    });
    const startNode = nodes[0];
    const endNode = nodes[nodes.length - 1];
    const bestPath = startNode + "-" + endNode;
    if (strArr.indexOf(bestPath) != -1)
        return bestPath;
    const paths = [];
    findPaths([startNode]);
    function findPaths(pathSoFar) {
        const currentNode = pathSoFar[pathSoFar.length - 1];
        if (currentNode === endNode) {
            paths.push(pathSoFar.slice());
            return;
        }
        for (var i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (currentNode === connection[0] || currentNode === connection[1]) {
                var nextNode = currentNode === connection[0] ? connection[1] : connection[0];
                if (pathSoFar.indexOf(nextNode) === -1) {
                    pathSoFar.push(nextNode);
                    findPaths(pathSoFar.slice());
                    pathSoFar.pop();
                }
            }
        }
    }
    const shortestPath = paths
        .sort(function (a, b) {
        return b.length - a.length;
    })
        .pop();
    if (shortestPath)
        return shortestPath.join("-");
    else
        return -1;
}
const string = "juliasamanthasamanthajulia";
const s = "ant*as";
function findString() {
    const split = s.split("*");
    let remainingword = string.split(split[0]);
    const newWord = `${split[0]}${remainingword[1]}`;
    console.log(newWord);
    console.log(remainingword[0].length);
    const a = newWord.indexOf(split[0]);
    const b = newWord.indexOf(split[1]);
    console.log(a, b);
}
findString();

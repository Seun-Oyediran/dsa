"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // !LIST OF ALL PROBLEMS SOLVED
// // !SEVEN BOOM
// // !Burglary Series (15): Number of Occurrences
// // !Oddish vs. Evenish
// // !How Many Days Between Two Dates
// // !Longest Word in a 7 Segment Display
// // !Pandigital Numbers
// // !Calculate the Total Price of Groceries
// // !Who Left the Array?
// // *SEVEN BOOM STARTS HERE
// // ?Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// function sevenBoom(nums: Array<number>): void {
//   let arrayString: string = nums.join("");
//   if (arrayString.indexOf("7") > -1) {
//     console.log("BOOM!");
//   } else {
//     console.log("there is no 7 in the array");
//   }
// }
// sevenBoom([34, 56, 7, 4, 1, 2, 3]);
// // *SEVEN BOOM ENDS HERE
// // *Burglary Series (15): Number of Occurrences STARTS HERE
// // ?Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.
// function countNumberOfOccurrences(arg: {}): void {
//   let a = Object.entries(arg).map((item) => item[1]);
//   let obj;
//   a.forEach((item: any) => {
//     if (!obj) {
//       obj = { [item]: 1 };
//       return;
//     }
//     if (!obj[item]) {
//       obj = { ...obj, [item]: 1 };
//     } else {
//       obj = { ...obj, [item]: obj[item] + 1 };
//     }
//   });
//   console.log(obj);
// }
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot",
// });
// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c: "moron",
// });
// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag",
// });
// // *Burglary Series (15): Number of Occurrences ENDS HERE
// // *Oddish vs. Evenish STARTS HERE
// // ?Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// function oddishOrEvenish(num: number): void {
//   let numArray: Array<number | string> = num.toString().split("");
//   numArray = numArray.map((item) => +item);
//   let total = 0;
//   numArray.forEach((nos) => {
//     total = total + +nos;
//   });
//   if (total % 2 === 1) {
//     console.log("Oddish");
//   } else {
//     console.log("Evenish");
//   }
// }
// oddishOrEvenish(43);
// oddishOrEvenish(373);
// oddishOrEvenish(4433);
// // *Oddish vs. Evenish ENDS HERE
// // *How Many Days Between Two Dates STARTS HERE
// // ?Create a function that takes two dates and returns the number of days between the first and second date.
// function getDays(date1: Date, date2: Date): void {
//   let firstDay = date1.getTime();
//   let secondDay = date2.getTime();
//   let diff = firstDay - secondDay;
//   if (diff < 0) {
//     diff = diff * -1;
//   }
//   let newDate: string | number = new Intl.DateTimeFormat().format(diff);
//   newDate = parseFloat(newDate.split("/")[0]);
//   console.log(newDate - 1);
// }
// getDays(new Date("July 20, 2019"), new Date("July 30, 2019"));
// getDays(new Date("December 29, 2018"), new Date("January 1, 2019"));
// getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));
// // *How Many Days Between Two Dates ENDS HERE
// // *Longest Word in a 7 Segment Display STARTS HERE
// // ?Given an array of words, return the longest word which can fit on a 7 segment display.
// // ?Letters which do not fit on a 7 segment display are k, m, v, w and x.
// // ?Therefore, do not count words which include these letters.
// function longest7SegmentWord(words: Array<string>): void {
//   const letters = ["k", "m", "v", "w", "x"];
//   letters.forEach((letter) => {
//     words = words.filter((word) => word.toLowerCase().indexOf(letter) < 0);
//   });
//   words = words.sort((a, b) => b.length - a.length);
//   if (words.length === 0) {
//     words.push("");
//   }
//   console.log(words[0]);
// }
// longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]);
// longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]);
// longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]);
// // *Longest Word in a 7 Segment Display ENDS HERE
// // *Pandigital Numbers STARTS HERE
// // ?A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
// function isPandigital(nos: number): void {
//   const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let nosArray: Array<number | string> = nos.toString().split("");
//   let isPandigitalAns: Array<boolean> = [];
//   numbersArray.forEach((number) => {
//     if (nosArray.indexOf(number.toString()) > -1) {
//       isPandigitalAns.push(true);
//     } else {
//       isPandigitalAns.push(false);
//     }
//   });
//   let finalAns = isPandigitalAns.find((item) => item === false);
//   if (finalAns === undefined) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isPandigital(98140723568910);
// isPandigital(90864523148909);
// isPandigital(112233445566778899);
// // *Pandigital Numbers ENDS HERE
// // *Calculate the Total Price of Groceries STARTS HERE
// // ?Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// function getTotalPrice(
//   item: Array<{ product: string; quantity: number; price: number }>
// ): void {
//   let totalPrice = 0;
//   item.forEach((product) => {
//     totalPrice = totalPrice + product.price * product.quantity;
//   });
//   console.log(totalPrice);
// }
// getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]);
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Cereals", quantity: 1, price: 2.5 },
// ]);
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Eggs", quantity: 12, price: 0.1 },
//   { product: "Bread", quantity: 2, price: 1.6 },
//   { product: "Cheese", quantity: 1, price: 4.5 },
// ]);
// // *Calculate the Total Price of Groceries ENDS HERE
// // *Who Left the Array? STARTS HERE
// // ?You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.
// type MissingArrayType = Array<number | string | boolean>;
// function missing(arr1: MissingArrayType, arr2: MissingArrayType) {
//   let finalanswer: any;
//   arr2.forEach((item1) => {
//     let newIndex = arr1.indexOf(item1);
//     if (newIndex > -1) {
//       arr1.splice(newIndex, 1);
//     }
//     if (arr1.length === 1) {
//       finalanswer = arr1[0];
//     }
//   });
//   console.log(finalanswer);
// }
// missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]);
// missing([true, true, false, false, true], [false, true, false, true]);
// missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]);
// // *Who Left the Array? ENDS HERE
const letters = "abcdefghijklmnopqrstuvyxyz";
function checkPangram(sentence) {
    const letterArray = letters.split("");
    for (let i = 0; i < letterArray.length; i++) {
        if (!sentence.includes(letterArray[i])) {
            return false;
        }
    }
    return true;
}
// console.log(checkPangram("west"));
// console.log(checkPangram("The quick brown fox jumps over the lazy dog output"));
function checkPalindrome(sentence) {
    let wordsArray = sentence.split("");
    let newWord = "";
    for (let i = wordsArray.length - 1; i > -1; i--) {
        newWord += wordsArray[i];
    }
    if (newWord === sentence) {
        return true;
    }
    return false;
}
console.log(checkPalindrome("word"));
console.log(checkPalindrome("ada"));

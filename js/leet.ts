// function twoSum(nums: number[], target: number): number[] {
//   for (let index = 0; index < nums.length; index++) {
//     for (let i = 0; i < nums.length; i++) {
//       console.log(nums[index] + nums[i]);

//       if (nums[index] + nums[i] === target && index !== i) {
//         return [index, i];
//       }
//     }
//   }

//   return [0, 0];
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// function prefix(strs: string[]) {
//   let returnString = "";

//   function recursive(index: number) {
//     const filterArr = strs.filter((word) => {
//       if (!word) return "";
//       return word[index] === strs[0][index];
//     });

//     if (filterArr.length !== strs.length) {
//       return returnString;
//     }
//     returnString += strs[0][index];
//     return recursive(index + 1);
//   }

//   return recursive(0);
// }

// console.log(prefix(["flower", "flow", "flight"]));
// console.log(prefix([""]));

// function bracketChecker(s: string) {
//   const frontItems = ["(", "{", "["];
//   const backItems = [")", "}", "]"];

//   const frontArray: Array<number> = [];

//   s.split("").forEach((item) => {
//     if (frontItems.includes(item)) {
//       frontArray.push(1);
//     }
//     if (backItems.includes(item)) {
//       const ans = frontArray.pop();
//     }
//   });

//   if (frontArray.length === 0) {
//     return true;
//   }

//   return false;
// }

// console.log(bracketChecker(""));
// console.log(bracketChecker("()[]{}"));
// console.log(bracketChecker("(]"));

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const newArray = [...nums1, ...nums2].sort((a, b) => a - b);
//   if (newArray.length % 2 !== 0) {
//     return newArray[newArray.length / 2 - 0.5];
//   } else {
//     const average =
//       newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1];
//     return average / 2;
//   }
// }

// console.log(findMedianSortedArrays([1, 5], [2, 3, 7]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

// function firstMissingPositive(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   let missing = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === missing) {
//       missing += 1;
//     }
//   }

//   return missing;
// }

// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));

// function rotate(matrix: number[][]): void {
//   let fatherArray: number[][] = [];
//   for (let j = 0; j < matrix[0].length; j++) {
//     const newArray: Array<number> = [];

//     for (let i = matrix.length - 1; i > -1; i--) {
//       newArray.push(matrix[i][j]);
//     }
//     fatherArray.push(newArray);
//     // console.log(matrix[j]);
//     // matrix[j] = newArray;
//   }
//   matrix = [...fatherArray];
//   console.log(matrix);
// }

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);

function reverse(x: number): number {
  // if ((-2) ** 31 <= x || x <= 2 ** 31 - 1) return 0;
  let negative = false;
  if (x < 0) {
    negative = true;
    x = Math.abs(x);
  }

  let array = x.toString().split("");
  let val = "";
  for (let i = array.length - 1; i > -1; i--) {
    val += array[i];
  }
  if (!(parseInt(val) <= Math.pow(2, 31) && parseInt(val) >= Math.pow(-2, 31)))
    return 0;
  if (negative) {
    return -parseInt(val);
  }

  return parseInt(val);
}

// console.log(reverse(-123));
// console.log(reverse(1534236469));

// console.log(reverse(1534236469));

function maxSlice(A: number[]) {
  if (A.length === 1) {
    return A[0];
  }

  let maxSum = -Infinity;

  for (let i = 0; i < A.length; i++) {
    let currentSum = 0;
    if (i === 0) {
      currentSum = A[i];
    }
    if (i !== 0) {
      currentSum = Math.max(A[i - 1] + A[i], A[i]);
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

maxSlice([3, 2, -6, 4, 0]);

console.log(0 % 2);

function longestGap(N: number) {
  let binary = "";
  let counter = -1;
  let max = 0;
  function recursive(number: number, base: number) {
    if (number < 1) {
      return 0;
    }

    if (number % base > 0) {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= 0) {
      counter += 1;
    }

    binary = `${number % base}` + binary;

    recursive(Math.floor(number / base), base);
  }

  recursive(N, 2);

  console.log(binary, max);
}

longestGap(32);

function checkLongestword(string: string) {
  const stringArray = string.replace(/[.?!]/g, "3").split("3");

  let maxLength = 0;
  stringArray.forEach((word) => {
    let num = word.split(" ").filter((i) => i !== "").length;

    maxLength = Math.max(maxLength, num);
  });

  console.log(maxLength);
}

checkLongestword("we test coders. Give us a try?");

checkLongestword("forget cvs..save time . x x");

function calculateDate(priceArray: number[], dateArray: string[]) {
  const paymentCountArray = new Array(12).fill({ count: 0, total: 0 });

  let totalMoney = 0;
  for (let i = 0; i < priceArray.length; i++) {
    totalMoney += priceArray[i];
    let month = parseInt(dateArray[i].split("-")[1]) - 1;

    if (priceArray[i] < 0) {
      paymentCountArray[month] = {
        count: paymentCountArray[month].count + 1,
        total: paymentCountArray[month].total + Math.abs(priceArray[i]),
      };
    }
  }

  const finalArray = paymentCountArray.filter(
    (item) => item.count > 2 && item.total > 99
  );

  totalMoney = totalMoney + -5 * (paymentCountArray.length - finalArray.length);

  console.log(totalMoney);
  return totalMoney;
}

calculateDate(
  [100, 100, 100, -10],
  ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]
);

calculateDate(
  [180, -50, -25, -25],
  ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"]
);

calculateDate(
  [1, -1, 0, -105, 1],
  ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"]
);

calculateDate(
  [100, 100, -10, -20, -30],
  ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"]
);

function renamePictures(string: string) {
  const picturesArray: any = [];
  const resultArray: any = [];
  let currentCity = "";
  let currentCityIndex = 1;

  string.split("\n").forEach((item, index) => {
    const itemArray = item.split(", ");
    const extension = itemArray[0].split(".")[1];

    picturesArray.push({
      index,
      city: itemArray[1],
      date: new Date(itemArray[2]).getTime(),
      extension,
      personalIndex: 0,
    });
  });

  picturesArray.sort(function (a, b) {
    var textA = a.city.toUpperCase();
    var textB = b.city.toUpperCase();

    if (textA < textB) {
      return -1;
    } else if (textA > textB) {
      return 1;
    } else {
      return a.date - b.date;
    }
  });

  picturesArray.forEach((element) => {
    if (currentCity !== element.city) {
      currentCity = element.city;
      currentCityIndex = 1;
    } else {
      currentCityIndex += 1;
    }

    element.personalIndex = currentCityIndex;
    let finalString = `${element.city}${
      element.personalIndex < 10 && currentCityIndex > 10
        ? `0${element.personalIndex}`
        : element.personalIndex
    }.${element.extension}`;

    resultArray[element.index] = finalString;
  });

  console.log(resultArray.join("\n"));
}

renamePictures(
  "photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nz.png, Warsaw, 2012-02-29 22:13:11"
);

function frogJump(X: number, Y: number, D: number) {
  // write your code in JavaScript (Node.js 4.0.0)
  if (X === Y) {
    return 0;
  } else if (D >= Y - X) {
    return 1;
  } else {
    var jumps = Math.floor((Y - X) / D);
    console.log(jumps);

    jumps += (Y - X) % D > 0 ? 1 : 0;
    return jumps;
  }
}

frogJump(10, 85, 30);

function solution(A: number[]) {
  let current = 1;
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => b - a).forEach((num) => {
    if (current !== num) {
      return num;
    }
    current += 1;
    return 23;
  });
}

console.log(solution([5, 4, 2, 1]));

function oddOccurrences(A: number[]) {
  var agg = 0;

  for (var i = 0; i < A.length; i++) {
    agg ^= A[i];
  }

  return agg;
}

oddOccurrences([9, 3, 9, 3, 9, 7, 9]);

function shiftArray(A: number[], K: number) {
  const finalResult: number[] = [];

  A.forEach((num, index) => {
    const newIndex = (index + K) % A.length;
    finalResult[newIndex] = num;
  });

  console.log(finalResult);
}

shiftArray([1, 2, 3, 4], 2);

function frogJumper(X: number, A: number[]) {
  const leaves: any = [];
  let result = -1;

  for (let i = 0; i < A.length; i++) {
    if (typeof leaves[A[i]] == "undefined") {
      leaves[A[i]] = i;
    }
  }
  if (leaves.length < X) {
    return -1;
  }

  for (let i = 1; i <= X + 1; i++) {
    if (typeof leaves[i] == "undefined") {
      return -1;
    } else {
      result = Math.max(result, leaves[i]);
    }
  }
}
frogJumper(5, [1, 3, 1, 4, 2, 3, 5, 4]);

function isPermutation(A: number[]) {
  A.sort((a, b) => a - b);
  let currentNos = 1;

  for (let i = 0; i < A.length; i++) {
    if (currentNos !== A[i]) {
      return 0;
    }
    currentNos += 1;
  }

  return 1;
}

function checkDivs(A: number, B: number, K: number) {
  if (A === B && A % K !== 0) {
    return 0;
  } else if (A === B && A % K === 0) {
    return 1;
  }

  let total = 0;

  total = Math.floor(B / K) - (A > 0 ? Math.floor((A - 1) / K) : 0);

  if (A === 0) total += 1;

  return total;
}

checkDivs(6, 11, 13);

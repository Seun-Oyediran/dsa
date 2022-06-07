// !LIST OF ALL PROBLEMS SOLVED
// !EXACTLY THREE
// !THE FISCAL CPDE
// !VALID NAME
// !FREQUENCY BY LEVEL OF NESTING
// !RECURSION: REVERSED LIST INDEX
// !CEASER'S CIPHER
// !NUMBERS FIRST, LETTERS SECOND

// *EXACTLY THREE STARTS HERE
// ?You are given a number n. Determine whether n has exactly 3 divisors or not.

function isExactlyThree(n: number, target = 3) {
  if (n < 1) {
    console.log("Number must be greater than 0");
    return false;
  }

  function recursive(number: number) {
    if (number === 0) return 0;
    if (n % number !== 0) {
      return 0 + recursive(number - 1);
    }

    return 1 + recursive(number - 1);
  }

  if (recursive(n) !== target) return false;

  return true;
}

console.log(isExactlyThree(4)); // true

console.log(isExactlyThree(12)); // false

console.log(isExactlyThree(25));

console.log(isExactlyThree(10 ** 3));

// *EXACTLY THREE ENDS HERE

// console.log();

// *THE FISCAL CODE STARTS HERE
// ?Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

//? Generate 3 capital letters from the surname, if it has:

//? At least 3 consonants then the first three consonants are used. (Newman -> NWM).
//? Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
//? Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
//? Generate 3 capital letters from the name, if it has:

//? Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
//? More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
//? Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
//? Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
//? Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

// ?Take the last two digits of the year of birth (1985 -> 85).
//? Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
//? For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
//? For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

interface IPerson {
  name: string;
  surname: string;
  gender: "M" | "F";
  dob: string;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const vowels = "AEIOU";

const monthData = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};

function handleSurname(surname: string) {
  let surnameCode = "";
  const surnameArray = surname.toUpperCase().split("");
  if (surname.length === 2) {
    surnameCode = `${surname.toUpperCase()}X`;
    return surnameCode;
  }
  const consonantsInSurname = surnameArray.filter(
    (letter) => !vowels.split("").includes(letter)
  );
  if (consonantsInSurname.length > 2) {
    return consonantsInSurname.slice(0, 3).join("");
  }
  const vowelsInSurname = surnameArray.filter((letter) =>
    vowels.split("").includes(letter)
  );

  return `${consonantsInSurname.join("")}${vowelsInSurname[0]}`;
}

function handleName(name: string) {
  const nameArray = name.toUpperCase().split("");

  const consonantsInName = nameArray.filter(
    (letter) => !vowels.split("").includes(letter)
  );

  const vowelsInName = nameArray.filter((letter) =>
    vowels.split("").includes(letter)
  );

  const allLetters = [...consonantsInName, ...vowelsInName];

  if (nameArray.length < 3) {
    return [...allLetters, ...new Array(3).fill("X")].slice(0, 3).join("");
  }

  if (consonantsInName.length === 3) {
    return consonantsInName.join("");
  }

  if (consonantsInName.length > 3) {
    return `${consonantsInName[0]}${consonantsInName[2]}${consonantsInName[3]}`;
  }

  return allLetters.slice(0, 3).join("");
}

function handleDOB(gender: "F" | "M", dob: string) {
  const dobArray = dob.split("/");
  const yearCode = dobArray[2].slice(2, dobArray[2].length);
  const monthCode = monthData[dobArray[1]];
  let dayCode = "";

  if (gender === "M") {
    dayCode = dobArray[0].length < 2 ? `0${dobArray[0]}` : dobArray[0];
    return `${yearCode}${monthCode}${dayCode}`;
  }

  dayCode = `${40 + parseInt(dobArray[0])}`;
  return `${yearCode}${monthCode}${dayCode}`;
}

function fiscalCode(person: IPerson) {
  const { surname, name, gender, dob } = person;
  const surnameCode = handleSurname(surname);

  const nameCode = handleName(name);

  const dobCode = handleDOB(gender, dob);

  return `${surnameCode}${nameCode}${dobCode}`;
}

console.log(
  fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900",
  })
); // DBTMTT00A01

console.log(
  fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950",
  })
); // YUXHLN50T41

console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  })
); // MSOMKY28A16

// *THE FISCAL CODE ENDS HERE

// *VALID NAME STARTS HERE
//? A valid name is a name written in one of the following ways:

//? H. Wells
//? H. G. Wells
//? Herbert G. Wells
//? Herbert George Wells
//? The following names are invalid:

//? Herbert or Wells (single names not allowed)
//? H Wells or H. G Wells (initials must end with dot)
//? h. Wells or H. wells or h. g. Wells (incorrect capitalization)
//? H. George Wells (middle name expanded, while first still left as initial)
//? H. G. W. (last name is not a word)
//? Herb. G. Wells (dot only allowed after initial, not word)
//? Rules
//? Both initials and words must be capitalized.
//? Initials must end with a dot.
//? A name must be either 2 or 3 terms long.
//? If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
//? The last name must be a word (not an initial).
//? Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

const lettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function validName(name: string) {
  const nameArray = name.split(" ");

  if (nameArray.length < 2) {
    console.log("Name must be 2 or 3 words");
    return false;
  }

  if (nameArray[nameArray.length - 1].includes(".")) {
    console.log("Last name cannot be initial");
    return false;
  }

  if (
    nameArray.length > 2 &&
    nameArray[0].includes(".") &&
    !nameArray[1].includes(".")
  ) {
    console.log("Cannot have: initial first name + word middle name");
    return false;
  }

  nameArray.forEach((item) => {
    if (item.includes(".") && item.length > 2) {
      console.log("Words cannot end with a dot (only initials can)");
      return false;
    }

    if (!item.includes(".") && item.length < 2) {
      console.log(" Missing dot after initial");
      return false;
    }

    if (!lettersArray.includes(item.slice(0, 1))) {
      console.log("Name and initials must start withn Caps");
      return false;
    }
  });

  return true;
}

validName("H. Wells"); // true

validName("H. G. Wells"); // true

validName("Herbert G. Wells"); // true

validName("Herbert"); // false
// Must be 2 or 3 words

validName("h. Wells"); //false
// Name and initials must start withn Caps

validName("H Wells"); //false
// Missing dot after initial

validName("H. George Wells"); // false
// Cannot have: initial first name + word middle name

validName("H. George W."); //false
// Last name cannot be initial

validName("Herb. George Wells"); // false
// Cannot have: initial first name + word middle name

// *VALID NAME ENDS HERE

// *FREQUENCY BY LEVEL OF NESTING STARTS HERE
// ?Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.

function freqCount(nestedArray: Array<any>, element: number) {
  const finalResult: Array<Array<number>> = [];
  function recursive(array: Array<any>, level: number) {
    let tempArray: Array<any> = [];

    const occurrence = array.filter((item) => item === element);
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] !== undefined) {
        tempArray = [...tempArray, ...array[i]];
      }
    }

    finalResult.push([level, occurrence.length]);

    if (tempArray.length === 0) return;

    recursive(tempArray, level + 1);
  }

  recursive(nestedArray, 0);

  return finalResult;
}

freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1); // [[0, 1], [1, 2], [2, 3]]

freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5); // [[0, 3], [1, 4], [2, 0]]

freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2); // [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]

// *FREQUENCY BY LEVEL OF NESTING ENDS HERE

// *RECURSION: REVERSED LIST INDEX STARTS HERE
// ?Write a recursive function that filters the items in an array (given as parameter arr) by positional parity (odd or even), given as parameter par, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.

function getItemsAt(array: Array<any>, condition: "odd" | "even") {
  const result: Array<any> = [];
  function recursive(index: number) {
    if (array.length + index < 0) return;

    result.unshift(array[array.length + index]);

    recursive(index - 2);
  }

  if (condition === "odd") {
    recursive(-1);
  }

  if (condition === "even") {
    recursive(-2);
  }

  return result;
}

getItemsAt([2, 4, 6, 8, 10], "odd");
// [2, 6, 10]

getItemsAt(["E", "D", "A", "B", "I", "T"], "even");
// ["E", "A", "I"]

getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even");
// [")", "*", ^", "$", "@"]

getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even");
// ["R", "I", "R", "R", "L"]
// *RECURSION: REVERSED LIST INDEX ENDS HERE

// *CEASER'S CIPHER STARTS HERE
// ?Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// ?Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

const allLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function isCapitalLetter(letter: string) {
  if (letter === letter.toUpperCase()) return true;

  return false;
}

function caesarCipher(sentence: string, shift: number) {
  let encryptedString = "";

  for (let i = 0; i < sentence.length; i++) {
    const currentLetter = sentence[i];
    if (!allLettersArray.includes(currentLetter.toUpperCase())) {
      encryptedString += currentLetter;
    }

    if (allLettersArray.includes(currentLetter.toUpperCase())) {
      const currentIndex = allLettersArray.indexOf(currentLetter.toUpperCase());
      const shiftedIndex = (currentIndex + shift) % allLettersArray.length;

      if (!isCapitalLetter(currentLetter)) {
        encryptedString += allLettersArray[shiftedIndex].toLocaleLowerCase();
      } else {
        encryptedString += allLettersArray[shiftedIndex];
      }
    }
  }
  // console.log(encryptedString);

  return encryptedString;
}

caesarCipher("middle-Outz", 2);
// "okffng-Qwvb"

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5);
// "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20);
// "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

// *CEASER'S CIPHER STARTS HERE

// *NUMBERS FIRST, LETTERS SECOND STARTS HERE
function numThenChar(array: Array<Array<number | string>>) {
  let allItemsArray: Array<number | string> = [];
  const finalResult: Array<Array<number | string>> = [];
  let startingIndex = 0;

  for (let i = 0; i < array.length; i++) {
    allItemsArray.push(...array[i]);
  }

  const numberArray = allItemsArray
    .filter((item) => typeof item === "number")
    .sort((a, b) => +a - +b);

  const lettersArray = allItemsArray
    .filter((item) => typeof item === "string")
    .sort();

  allItemsArray = [...numberArray, ...lettersArray];

  for (let i = 0; i < array.length; i++) {
    const lastIndex = startingIndex + array[i].length;
    // console.log(allItemsArray);

    finalResult.push(allItemsArray.slice(startingIndex, lastIndex));
    startingIndex += array[i].length;
  }

  return finalResult;
}

numThenChar([
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5],
  [7, "d"],
  ["f", "e", 8],
]);
// [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"], ["d", "e", "f"]
// ]

numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0],
  [0.5, "d", "X", 3, "s"],
  ["f", "e", 8],
  ["p", "Y", "Z"],
  [12, 18],
]);
// [
//   [0, 0.5, 1, 2, 3, 4.4],
//   [8],
//   [12, 18, "X", "Y", "Z"],
//   ["a", "b", "d"],
//   ["e", "f", "f"],
//   ["p", "s"]
// ]

// *NUMBERS FIRST, LETTERS SECOND ENDS HERE

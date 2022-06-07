"use strict";
class Queue {
    constructor() {
        this.dataStore = [];
    }
    enqueue(element) {
        this.dataStore.push(element);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    empty() {
        return this.dataStore.length === 0;
    }
    deque() {
        return this.dataStore.pop();
    }
}
const a = new Queue();
a.enqueue("ada");
a.enqueue("tobi");
a.enqueue("adama");
a.enqueue("tobirama");
console.log(a.empty());
console.log(a.front());
a.dequeue();
console.log(a.front());
const dancers = [
    "F Tutu",
    "M Deji",
    "M Jane",
    "M Tobi",
    "F Titi",
    "F John",
    "M Fesser",
    "M Jackie",
    "F Glas",
    "M James",
];
class Dancer {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
const maleDancers = new Queue();
const femaleDancers = new Queue();
dancers.forEach((item) => {
    if (item.split(" ")[0] === "M") {
        maleDancers.enqueue(item.split(" ")[1]);
    }
    else {
        femaleDancers.enqueue(item.split(" ")[1]);
    }
});
const matchDancers = (male, female) => {
    if (!male.empty() && !femaleDancers.empty()) {
        console.log(`Male dancer: ${male.dequeue} and Female dancer: ${female.dequeue()}`);
    }
    if (!male.empty()) {
        console.log(`${male.dataStore.length} are unmatched`);
    }
    if (!female.empty()) {
        console.log(`${female.dataStore.length} are unmatched`);
    }
};
matchDancers(maleDancers, femaleDancers);
// using queue as a palindrome checker
const PalindromeChecker = (word) => {
    const s = new Queue();
    const r = new Queue();
    word.split("").forEach((item) => {
        s.enqueue(item);
    });
    // while(s.)
    while (s.dataStore.length > 0) {
        r.enqueue(s.deque());
    }
    if (word === r.dataStore.join("")) {
        return `${word} is a palindrome`;
    }
    return `${word} is not a palindrome`;
};
console.log(PalindromeChecker("tobi"));
console.log(PalindromeChecker("abba"));

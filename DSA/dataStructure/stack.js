"use strict";
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    clear() {
        this.top = 0;
        this.dataStore = [];
    }
    pop() {
        this.top = this.top - 1;
        // return this.dataStore[--this.top];
        return this.dataStore[this.top];
    }
    push(element) {
        this.dataStore[this.top] = element;
        this.top = this.top + 1;
    }
    length() {
        return this.top;
    }
}
const num = new Stack();
function multiBase(num, base) {
    const s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);
    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
console.log(multiBase(127, 2));
const isPalindrome = (word) => {
    const wordStack = new Stack();
    word.split("").forEach((item) => {
        wordStack.push(item);
    });
    let rword = "";
    while (wordStack.length() > 0) {
        rword += wordStack.pop();
    }
    if (rword == word) {
        return true;
    }
    return false;
};
console.log(isPalindrome("lodol"));
const checkBracket = (expression) => {
    const bracketStack = new Stack();
    expression.split("").forEach((item) => {
        if (item === "(") {
            bracketStack.push("(");
        }
        if (item === ")") {
            bracketStack.pop();
        }
    });
    if (bracketStack.length() === 0) {
        return "Bracket is closed";
    }
    return "Bracket is not closed";
};
console.log(checkBracket("2+4 5 ( 8(4)74)"));
const pezDispenser = (colors, remove) => {
    const oldStack = new Stack();
    const newStack = new Stack();
    colors.forEach((item) => {
        oldStack.push(item);
    });
    while (oldStack.length() > 0) {
        if (oldStack.peek() === remove) {
            oldStack.pop();
        }
        else {
            newStack.push(oldStack.pop());
        }
    }
    oldStack.clear();
    while (newStack.length() > 0) {
        oldStack.push(newStack.pop());
    }
    return oldStack.dataStore;
};
console.log(pezDispenser(["red", "yellow", "green", "purple", "brown"], "yellow"));

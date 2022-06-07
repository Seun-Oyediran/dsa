class HashTable {
  table: Array<any>;
  constructor() {
    this.table = new Array(137);
  }

  hash(string: string) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }

    total = total % this.table.length;
    return total;
  }

  put(key: string, data) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] !== undefined) {
      index += 2;
    }
    this.table[pos][index] = key;
    this.table[pos][index + 1] = data;
  }

  showDistro() {
    // let n = 0;

    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i, this.table[i]);
      }
    }
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  get(key) {
    let index = 0;
    let pos = this.hash(key);
    while (this.table[pos][index] != key && index < this.table[pos].length) {
      index += 2;
    }
    return this.table[pos][index + 1];
  }
  // }
}

const s = new HashTable();
s.buildChains();

var someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];

for (var i = 0; i < someNames.length; ++i) {
  s.put(someNames[i], someNames[i]);
}

// s.showDistro();
// s.get('David')
console.log(s.get("David"));
console.log(s.get("Jonathan"));

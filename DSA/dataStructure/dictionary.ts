class Dictionary {
  dataStore: Array<any>;
  constructor() {
    this.dataStore = new Array();
  }

  add(key, element) {
    this.dataStore[key] = element;
  }

  find(key) {
    return this.dataStore[key];
  }

  remove(key) {
    delete this.dataStore[key];
  }

  showAll() {
    Object.keys(this.dataStore)
      .sort()
      .forEach((key) => {
        console.log(this.dataStore[key]);
      });
  }

  count() {
    let num = 0;
    Object.keys(this.dataStore).forEach(() => {
      num += 1;
    });
    return num;
  }

  clear() {
    Object.keys(this.dataStore).forEach((key) => {
      delete this.dataStore[key];
    });
  }
}

const test = new Dictionary();

test.add("b", "boy");
test.add("a", "boyssss");
test.add("c", "boysss");
test.add("f", "jackie");

// test.clear();

console.log(test.count());

const noOfOccurrences = (text: string) => {
  const s = new Dictionary();
  let update;
  text.split(" ").forEach((item) => {
    update = s.find(item);

    if (update) {
      s.add(item, { word: item, no: update.no + 1 });
    } else {
      s.add(item, { word: item, no: 1 });
    }
  });

  s.showAll();
};

noOfOccurrences("the brown fox jumped over the blue fox");

class LocalSet {
  dataStore: Array<any>;
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    if (!this.dataStore.includes(data)) {
      this.dataStore.push(data);
      this.dataStore = this.dataStore.sort();
      return true;
    }
    return false;
  }

  remove(data) {
    const pos = this.dataStore.indexOf(data);

    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.dataStore.length;
  }

  show() {
    return this.dataStore;
  }

  union(set: LocalSet) {
    const tempSet = new LocalSet();
    this.dataStore.forEach((item) => {
      tempSet.add(item);
    });
    set.dataStore.forEach((setItem) => {
      tempSet.add(setItem);
    });
    return tempSet;
  }

  intersect(set: LocalSet) {
    const tempSet = new LocalSet();

    set.dataStore.forEach((item) => {
      if (this.dataStore.includes(item)) {
        tempSet.add(item);
      }
    });

    return tempSet;
  }

  difference(set: LocalSet) {
    const tempSet = new LocalSet();

    set.dataStore.forEach((item) => {
      if (!this.dataStore.includes(item)) {
        tempSet.add(item);
      }
    });

    return tempSet;
  }
}

const testSet = new LocalSet();

// testSet.add("tobi");
testSet.add("folake");
testSet.add("tola");
testSet.add("sun");
testSet.add("tobi");

const testSet2 = new LocalSet();

testSet2.add("folake");
testSet2.add("tola");
testSet2.add("tobi");

console.log(testSet.union(testSet2).show());
console.log(testSet.intersect(testSet2).show());
console.log(testSet.difference(testSet2).show());

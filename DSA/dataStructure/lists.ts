class list {
  dataStore: Array<any>;
  listSize: number;
  pos: number;
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  }
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  clear() {
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  find(element) {
    for (let i = 0; i < this.dataStore?.length; i++) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize = this.listSize - 1;
      return true;
    } else {
      return false;
    }
  }

  length() {
    return this.listSize;
  }

  insert(element, after) {
    const afterPos = this.find(after);

    if (afterPos > -1) {
      this.dataStore.splice(afterPos + 1, 0, element);
      this.listSize = this.listSize + 1;
      return true;
    }
    return false;
  }

  contains(element) {
    const find = this.find(element);
    if (find > -1) {
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      this.pos = this.pos - 1;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      this.pos = this.pos + 1;
    }
  }

  getCurrentPos() {
    return this.pos;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  getAllElements() {
    return this.dataStore;
  }

  moveTo(position: number) {
    if (position > -1 && position < this.listSize) {
      this.pos = position;
    }
  }
}

class Nodes {
  element: any;
  next: any;
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head: any;
  constructor() {
    this.head = new Nodes("head");
  }

  find(element) {
    let currNode = this.head;
    while (currNode.element !== element) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, afterElement) {
    let newNode = new Nodes(newElement);
    let after = this.find(afterElement);
    newNode.next = after.next;
    after.next = newNode;
  }

  display() {
    let currNode = this.head;
    return currNode;
  }

  findPrevious(element) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element != element) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(element) {
    let node = this.findPrevious(element);
    if (!(node.next == null)) {
      node.next = node.next.next;
    }
  }
}

const testList = new LinkedList();

testList.insert("a", "head");
testList.insert("b", "head");

console.log(testList.display());
testList.insert("c", "head");
testList.insert("d", "head");

console.log(testList.find("c"));

console.log(testList.display());

type INode = node | null;

class node {
  data: any;
  key: number;
  left: INode;
  right: INode;

  constructor(data: any, key: number, left: INode, right: INode) {
    this.data = data;
    this.key = key;
    this.right = right;
    this.left = left;
  }

  show() {
    return {
      key: this.key,
      data: this.data,
    };
  }
}

function getMin(node: INode) {
  if (node === null) return null;

  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

class TestBst {
  root: INode;
  constructor() {
    this.root = null;
  }

  insert(data: any, key: number) {
    function inserRec(root: INode, data: any, key: number) {
      if (root === null) {
        const NODE = new node(data, key, null, null);
        root = NODE;
        return root;
      }
      if (key === root.key) {
        if (!root.data.count) {
          root.data.count = 2;
          return root;
        }
        root.data.count++;
        return root;
      }
      if (key < root.key) {
        root.left = inserRec(root.left, data, key);
      } else if (key > root.key) {
        root.right = inserRec(root.right, data, key);
      }

      return root;
    }
    this.root = inserRec(this.root, data, key);
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
    return null;
  }

  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    return null;
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
    return null;
  }

  getMin(node = this.root) {
    if (node === null) return null;
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  getMax(node = this.root) {
    if (node === null) return null;
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  depth() {
    function depthRec(node: INode) {
      if (node === null) {
        return 0;
      }

      return 1 + Math.max(depthRec(node.left), depthRec(node.right));
    }

    return depthRec(this.root);
  }

  find(key: number) {
    function findRec(key: number, node: INode) {
      let current = node;
      // console.log(node);
      if (current === null) return null;

      if (current.key === key) {
        return current;
      }

      if (key < current?.key) {
        current = current.left;
        return findRec(key, current);
      } else {
        current = current.right;
        return findRec(key, current);
      }
    }

    return findRec(key, this.root);
  }

  remove(key: number) {
    this.root = removeNodeRec(key, this.root);

    function removeNodeRec(key: number, node: INode) {
      let current = node;
      if (current === null) return null;

      if (key === current.key) {
        // node has no children
        if (current.left == null && current.right == null) {
          return null;
        }
        // node has no left child
        if (current.left == null) {
          return current.right;
        }
        // node has no right child
        if (current.right == null) {
          return current.left;
        }

        let tempNode = getMin(current.right);
        if (tempNode === null) return null;
        console.log(tempNode.show());

        current.key = tempNode.key;
        current.data = tempNode.data;

        current.right = removeNodeRec(tempNode.key, current.right);

        return current;
      }

      if (key < current.key) {
        current.left = removeNodeRec(key, current.left);
        return current;
      } else {
        current.right = removeNodeRec(key, current.right);
        return current;
      }
    }
  }

  noOfNodes(node = this.root) {
    if (node === null) return 0;

    return 1 + this.noOfNodes(node.left) + this.noOfNodes(node.right);
  }
}

const tester = new TestBst();

tester.insert({ name: "seun" }, 33);
tester.insert({ name: "noname" }, 5);
tester.insert({ name: "leao" }, 23);
tester.insert({ name: "rebic" }, 78);
tester.insert({ name: "rebic" }, 14);
tester.insert({ name: "Bennacer" }, 3);
// tester.insert({ name: "leao" }, 23);

// console.log("inorder");

// tester.inOrder();

// console.log("preorder");

// tester.preOrder();
// console.log("postorder");

// tester.postOrder();
// console.log(tester.getMin());
// console.log(tester.getMax());
// // console.log(tester.depth());

// console.log(tester.find(23));

console.log(tester.noOfNodes());

tester.remove(5);
tester.remove(33);

console.log("inorder");

tester.inOrder();

console.log(tester);

console.log(tester.noOfNodes());

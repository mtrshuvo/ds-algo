class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    let val = new TreeNode(value);
    if (this.isEmptyRoot()) {
      this.root = val;
      return;
    } else {
      const addtotree = (node) => {
        if (this.root.left === null) {
          this.root.left = node;
        }
        if (this.root.right === null) {
          this.root.left = node;
        }
      };
    }
  }
  isEmptyRoot() {
    if (this.root === null) {
      return true;
    }
    return false;
  }
  addToTree(data) {
    if (this.root.value > data) {
        if(this.root.left)
    }
  }
}
const tree = new BTree();
tree.add(10);
tree.add(20);
tree.add(30);
console.log(tree);

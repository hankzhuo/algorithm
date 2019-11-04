/**
 * @descrition 二叉树
 * 1. 父节点、子节点、兄弟节点、根节点（没有父节点的节点）、叶子节点（叶节点：没有子节点的节点）
 * 2. 高度（从下往上算）、深度（从上往下算）、层
 * 3. **二叉树分类**：满二叉树、完全二叉树、二叉查找树、其他
 * 4. **储存二叉树方式**：链式储存法、顺序储存法（比如数组）
 * 5. **二叉查找树**：
 *    1. 特点：左节点比节点小，右节点比节点大
 *    2. 遍历：广度优先搜索、深度优先搜索（前序遍历、中序遍历、后序遍历），遍历时间复杂度 O(n)
 */

// 二叉查找树，链表结构来储存 
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
  }

  // 插入
  insert(value) {
    var newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (current) {
        if (value === current.value) return undefined; // 如果插入的值和节点相同，则直接返回
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // 查找
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        return current;
      }
    }

    if (!found) return false;
  }

  // 删除
  delete(value) {
    var p = this.root;
    var pp = null; // 当前节点的父节点

    // 找到这个节点
    while (p && p.value !== value) {
      pp = p;
      if (p < value) {
        p = p.right;
      } else {
        p = p.left;
      }
    }

    if (!p) return; // 没有找到这个值

    // 要删除的节点有两个子节点，找到右子树最小的节点，替代要删除的节点
    if (p.left !== null && p.right !== null) { 
      var minP = p.right;
      var minPP = p; 

      while (minP.left !== null) {
        minPP = minP;
        minP = minP.left;
      }
      
      p.value = minP.value; // 把找到的最小的节点值赋值给删除节点
      minPP.left = null; // 删除 minP 节点
    }

    // 删除节点是叶子节点或者仅一个子节点
    var child;
    if (p.left) {
      child = p.left;
    } else if (p.right){
      child = p.right;
    } else {
      child = null
    }

    if (!pp) { // 删除的是根节点；
      this.root = child;
    } else if (pp.left == p) {
      pp.left = child;
    } else {
      pp.right = child;
    }
  }

  // 广度优先搜索
  BFS() {
    var data = [],
      queue = [],
      node = this.root;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // 先序遍历
  DFSPreOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // 后序遍历
  DFSPostOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }

  // 中序遍历
  DFSInOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

//         15
//      5      13
//    2   7  11  16
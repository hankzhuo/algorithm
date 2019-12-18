/**
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var levelOrder = function(root) {
  var levels = [];

  if (!root) return levels
  function helper(node, level) {
    if (levels.length === level) {
       levels.push([]);
    }

    levels[level].push(node.val)

    if (node.left) {
      helper(node.left, level + 1)
    }
    if (node.right) {
      helper(node.right, level + 1)
    }
  }
  
  helper(root, 0)
  return levels
};
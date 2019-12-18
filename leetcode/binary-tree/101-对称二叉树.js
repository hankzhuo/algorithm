/**
给定一个二叉树，检查它是否是镜像对称的。
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

说明: 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

//两个树互为镜像：
//  1. 它们的两个根结点具有相同的值。
//  2. 每个树的右子树都与另一个树的左子树镜像对称

var isSymmetric = function(root) {
  return isMirror(root, root)
};

function isMirror(t1, t2) {
  if (t1 === null || t2 === null) return t1 === t2
  // 递推公式：检查每一层的节点，该节点的左节点和右节点是否相同
  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

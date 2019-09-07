// 反转一个单链表。

// 示例:
  // 输入: 1->2->3->4->5->NULL
  // 输出: 5->4->3->2->1->NULL

// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  let current = head;  // 当前指针点 current
  let prev = null, nextTemp; // 前指针点 prev
  // 每次循环，都将当前节点指向前节点，并且当前节点和前节点指针后移
  while(current !== null) {
      nextTemp = current.next // 临时节点，暂存当前节点的下个节点
      current.next = prev // 当前节点指向前节点
      prev = current // 前指针后移
      current = nextTemp // 当前指针后移
  }
  return prev
};

// 总结：单链表精髓用了两个指针，一个控制前面节点，一个控制后面节点

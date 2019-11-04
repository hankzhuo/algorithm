// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
  // 输入：1->2->4, 1->3->4
  // 输出：1->1->2->3->4->4

  
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  // 链表从 l1 和 l2 小的节点作为开始，假如：l1.val < l2.val，则以 l1 为链表起点
  // 对比 l1.next 与 l2 值的大小，l1 指向小的节点
  // 递归，最终返回时以 l1 为起点的排序好的链表
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1;
  } else {
      l2.next = mergeTwoLists(l2.next, l1)
      return l2;
  }
};

// 链表的节点都是独立的
// 只要重新连接起来就是新链表  
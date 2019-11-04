// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例:
// 给定 1->2->3->4, 你应该返回 2->1->4->3.

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
var swapPairs = function(head) {
  if (head === null || head.next === null) {
      return head;
  }

  let newNode = swapPairs(head.next.next) // 相邻两个节点交换，可以理解 newNode 是链表除了前面两个节点外，后面的链表都已交换
  // 需要调换链表前两个节点位置 1 和 2
  let next = head.next;  
  next.next = head;
  head.next = newNode
  // 返回链表的 head
  return next 
  
//  代码优化如下：
//    let next = head.next;
//    head.next = swapPairs(next.next);
//    next.next = head;
//    return next;
};

// 为递归本质就是不断重复相同的事情。而不是去思考完整的调用栈，一级又一级，无从下手。
//  注意点：
   // 返回值
   // 调用单元做了什么
   // 终止条件，知道终止时返回什么
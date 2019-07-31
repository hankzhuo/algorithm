// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：
  // 给定一个链表: 1->2->3->4->5, 和 n = 2.
  // 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 说明：
// 给定的 n 保证是有效的。

// 进阶：
// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let start = new ListNode(0)
  let slow = start, fast = start; // 两个指针，一个慢指针 slow，一个快指针 fast
  start.next = head;

  // fast 先移动，使得 fast 和 slow 隔着 n 个节点
  for (var i = 1; i < n +1; i++) {
      fast = fast.next
  }

  // fast 移动到最末尾，slow 也移动相同距离
  while(fast.next) {
      fast = fast.next
      slow = slow.next
  }
  
  // slow 下一个节点就是要删除的点
  slow.next = slow.next.next
  return start.next
};

// 总结：单链表精髓用了两个指针，一个控制前面节点，一个控制后面节点
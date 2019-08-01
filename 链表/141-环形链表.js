/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fast = head, slow = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
          return true
      }
  }
  return false;
};

// 两个不同速度的指针，如果有环形链表，一定会相遇
/**
 * @description 循环队列
 * 1. 可以避免数据迁移操作
 * 2. 队列满时候，tail 位置不会存储数据，所以循环队列会浪费一个储存空间
 */

 // 循环队列
 class Queue {
  constructor(capacity) {
    this.queue = new Array(capacity) // capacity 队列容量
    this.count = capacity; // 队列大小
    this.head = 0; // 头部指针
    this.tail = 0; // 尾部指针
  }
  
  // 入队
  enqueue(val) {
    // 队列满了
    if ((this.tail + 1) % this.count === this.head) return false;
    this.queue[this.tail] = val;
    // 移动尾指针，尾指针不能超过队列大小
    this.tail = (this.tail + 1) % this.count;
    return true
  }

  // 出队
  dequeue() {
    // 队列为空
    if (this.tail === this.head) return null;
    const res = this.queue[this.head];
    this.queue[this.head] = null;
    // 移动头指针，头指针不能超过队列大小
    this.head = (this.head + 1) % this.count;
    return res
  }
}
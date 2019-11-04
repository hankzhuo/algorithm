/**
 * @description 循环队列
 * 1. 可以避免数据迁移操作
 * 2. 队列满时候，tail 位置不会存储数据，所以循环队列会浪费一个储存空间
 * 3. 阻塞队列和并发队列
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


// 1. 阻塞队列
// 其实就是在队列基础上增加了阻塞操作。简单来说，就是在队列为空的时候，从队头取数据会被阻塞。因为此时还没有数据可取，直到队列中有了数据才能返回；如果队列已经满了，那么插入数据的操作就会被阻塞，直到队列中有空闲位置后再插入数据，然后再返回。
// 这就是”生产者 - 消费者模型” 模型

// 2. 并发队列
// 最简单直接的实现方式是直接在 enqueue()、dequeue() 方法上加锁，但是锁粒度大并发度会比较低，同一时刻仅允许一个存或者取操作。实际上，基于数组的循环队列，利用 CAS 原子操作，可以实现非常高效的并发队列。这也是循环队列比链式队列应用更加广泛的原因。
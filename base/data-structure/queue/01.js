/**
 * @description 队列
 * 1. 先进先出原则
 * 2. 用数组实现的队列叫作*顺序队列*，用链表实现的队列叫作*链式队列*
 */

 // 顺序队列
class Queue {
  constructor(capacity) {
    this.queue = new Array(capacity) // capacity 队列容量
    this.count = capacity; // 队列大小
    this.head = 0; // 头部指针
    this.tail = 0; // 尾部指针
  }
  
  // 入队
  enqueue(val) {
    // 表示队列末尾没有空间了
    if (this.tail === this.count) {
      if (this.head === 0) return false; // 说明整个队列都满了
      // 数据搬移：解决当 tail 移动到最右边，即使数组中还有空闲空间，也无法继续往队列中添加数据了
      for (let i = this.head; i < this.tail; i++) {
        this.queue[i - head] = this.queue[i]
      }
      // 搬移数据后，更新 tail 和 head 指针
      this.tail -= this.tail - this.head;
      this.head = 0;
    }
    this.queue[this.tail] = val;
    this.tail++
    return true
  }

  // 出队
  dequeue() {
    if (this.tail === this.head) return null; // 队列为空
    const res = this.queue[this.head]
    this.queue[this.head] = null;
    this.head++;
    return res
  }
} 

// Test
const queue = new Queue(3)
// 插入元素
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

let res = 0
while (res !== null) {
    res = queue.dequeue()
    console.log(res)
}


console.log('-------链式队列------')


// 链式队列
class Node {
  constructor(val) {
    this.node = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
     this.tail.next = node;
     this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head === null) {
      return -1;
    } else {
      let node = this.head.node;
      let temp = this.head.next;
      this.head.next = null;
      this.head = temp;
      return node
    }
  }
}

// Test
const queue = new Queue()
// 插入元素
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
    res = queue.dequeue()
    console.log(res)
}
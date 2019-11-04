/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.k = k;  // 队列容量
  this.head = -1; // 头部指针
  this.tail = -1; // 尾部指针
  this.size = 0; // 队列长度
  this.data = new Array(k)
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.k === this.size) return false; // 队列已满
  if (this.tail === this.head && this.tail === -1) this.head++
  this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1 // 判断 tail 是否在队列末尾
  this.data[this.tail] = value
  this.size++
  return true
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
if (this.size === 0) return false;
this.data[this.head] = null;
this.head++
this.size--

if (this.size === 0) {
  this.head = -1;
  this.tail = -1
}
// head 从最后一位到第一位
if (this.head === this.k && this.size !== 0) {
  this.head = 0
}
return true
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.size === 0 ? -1 : this.data[this.head]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.size === 0 ? -1 : this.data[this.tail]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.k
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

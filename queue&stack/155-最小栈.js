// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

// 示例:
  // MinStack minStack = new MinStack();
  // minStack.push(-2);
  // minStack.push(0);
  // minStack.push(-3);
  // minStack.getMin();   --> 返回 -3.
  // minStack.pop();
  // minStack.top();      --> 返回 0.
  // minStack.getMin();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = []
  this.minData = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.data.push(x)
  let length = this.minData.length
  if (length == 0 || x <= this.minData[length - 1]) {
    this.minData.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.minData[this.minData.length - 1] === this.data[this.data.length - 1]) {
    this.minData.pop()
  }
  this.data.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minData[this.minData.length - 1]
};

// 使用辅助栈，记录出栈入栈，记录最小的值
// 出栈时，最小的值出栈才同步，入栈时，最小的值入栈才同步。
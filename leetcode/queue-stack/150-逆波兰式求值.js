// 根据逆波兰表示法，求表达式的值。

// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 说明：
// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

// 示例 1：
  // 输入: ["2", "1", "+", "3", "*"]
  // 输出: 9
  // 解释: ((2 + 1) * 3) = 9

// 示例 2：
  // 输入: ["4", "13", "5", "/", "+"]
  // 输出: 6
  // 解释: (4 + (13 / 5)) = 6

// 示例 3：
  // 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
  // 输出: 22
  // 解释: 
  //   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
  // = ((10 * (6 / (12 * -11))) + 17) + 5
  // = ((10 * (6 / -132)) + 17) + 5
  // = ((10 * 0) + 17) + 5
  // = (0 + 17) + 5
  // = 17 + 5
  // = 22


/**
 * @param {string[]} tokens
 * @return {number}
 */
var calculate = function(token, left, right) {
  switch(token) {
    case '+':
      return left + right
      break;
    case '-':
      return left - right
      break;
    case '*':
      return left * right
      break;
    case '/':
      return parseInt(left / right)
      break;
  }
}

var evalRPN = function(tokens) {
    let stack = [];
    let operators = ['+', '-', '*', '/'];
    var result
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (operators.includes(token)) {
        let right = stack.pop(), left = stack.pop();
        result = calculate(token, left, right)
        stack.push(result)
      } else {
        stack.push(Number(token))
      }
    }
  
    return stack[0]
};

// 使用栈，如果遇到非运算符，则入栈。如果遇到运算符，拿出栈顶前两位出栈，计算结果再入栈中。
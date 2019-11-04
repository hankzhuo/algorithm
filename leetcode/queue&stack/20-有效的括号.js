// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
  // 左括号必须用相同类型的右括号闭合。
  // 左括号必须以正确的顺序闭合。
  // 注意空字符串可被认为是有效字符串。

// 示例 1:
  // 输入: "()"
  // 输出: true
  // 示例 2:

  // 输入: "()[]{}"
  // 输出: true
  // 示例 3:

  // 输入: "(]"
  // 输出: false
  // 示例 4:

  // 输入: "([)]"
  // 输出: false
  // 示例 5:

  // 输入: "{[]}"
  // 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let head = s[0];
  let strLength = s.length;

  if (strLength === 0) return true
  // 右括号开头，奇数都不行
  if (strLength % 2 !== 0 || ['}', ']', ')'].indexOf(head) !== -1)  return false

  let stack = [];
  const MAP = {
      ')': '(',
      '}': '{',
      ']': '['
  }

  for (var i = 0; i < strLength; i++) {
      let length = stack.length;
      let top = length > 0 ? stack[length - 1] : null;
      let current = s[i]
      // 比较栈顶是否和当前字符串相同，相同则出栈
      if (top === MAP[current]) {
          stack.pop()
      } else {
          stack.push(current)
      }
  }

  return stack.length === 0
};
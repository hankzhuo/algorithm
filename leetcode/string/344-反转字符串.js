/**
题目：反转字符串

说明：编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
   输入：["h","e","l","l","o"]
   输出：["o","l","l","e","h"]

示例 2：
   输入：["H","a","n","n","a","h"]
   输出：["h","a","n","n","a","H"]
*/

// 方法1：自带方法
var reverseString = function(s) {
  if (!Array.isArray(s)) return s;
  return s.reverse()
};

// 方法 2：双指针解法，时间复杂度 O(n/2)
var reverseString = function(s) {
  return helper(0, s.length -1, s);
};

function helper(left, right, s) {
  while (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
  }
}


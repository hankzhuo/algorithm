// 最长公共前缀
// leetCode: 14
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
//  输入: ["flower","flow","flight"]
//  输出: "fl"

// 示例 2:
//  输入: ["dog","racecar","car"]
//  输出: ""

// 解释: 输入不存在公共前缀。
// 说明:所有输入只包含小写字母 a-z 。

// 最长公共前缀（只能是字符串从第一位开始算），递减法
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return ''
    let pre = strs[0];
    let i = 1;
    
    while (i < strs.length) {
      // 判断一串字符是否以某串字符开头，'abc'.indexOf('ab') => 0
      while (strs[i].indexOf(pre) != 0) {
        pre = pre.substring(0, pre.length - 1);
      }
      i++;
    }
    return pre
};
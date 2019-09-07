// 题目：字符串中的第一个唯一字符
// leetCode: 387

// 说明：给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 案例:
// s = "leetcode"
// 返回 0.

// s = "loveleetcode",
// 返回 2.
 
// 注意事项：您可以假定该字符串只包含小写字母。


// lastIndexOf 和 indexOf 都是计算字符串坐标。
// indexOf 是返回从左边开始数，如果有，则返回下标。lastIndexOf 则是从右边开始数，如果有，也是返回下标。
// 方法1：
var firstUniqChar = function(s) {
    let obj = {};
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
   return -1
};

// 方法2：
// Hash map，也是有顺序的。
var firstUniqChar = function(s) {
  const map = new Map();
  for (let i =0; i < s.length; i++) {
      if (map.has(s[i])) {
          map.set(s[i], 2)
      } else {
          map.set(s[i], 1)
      }
  }
  
  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i]) && map.get(s[i]) === 1) {
          return i
      }
  }
  
  return -1
};
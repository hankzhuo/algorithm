/**
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

// 动态规划
var generate = function(numRows) {    
  if (numRows === 0) return [];
  
  let list = new Array(numRows);
  list[0] = [1];
  
  for (let i = 1; i < numRows; i++) {
      let row = [];
      let prevRow = list[i - 1];
      
      row.push(1);
      
      for (let j = 1; j < i; j++) {  // 这里 j < i 等价于 j < prevRow.length
          row.push(prevRow[j - 1] + prevRow[j]);
      }
      
      row.push(1);
      console.log(row)
      list[i] = row;
  }
  
  return list;
};
// 题目：旋转图像
// leetcode：48

// 说明：给定一个 n × n 的二维矩阵表示一个图像。
// 将图像顺时针旋转 90 度。
// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

// 示例 1:
// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

/*
 * 顺时针旋转数组
 * 先翻转数组，然后交换对称性
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/
var rotate = function(matrix) {
    let arr = matrix.reverse();
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr[i].length; j++) {
            let item = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = item
        }
    }

    return arr
};

/*
 * 逆时针旋转数组
 * 先遍历，翻转每个子数组，然后交换对称性
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/
var rotate = function(matrix) {
  let arr = []
  
  for (var i = 0; i < matrix.length; i++) {
      arr.push(matrix[i].reverse())
  }
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr[i].length; j++) {
          let item = arr[i][j];
          arr[i][j] = arr[j][i];
          arr[j][i] = item
      }
  }

  return arr
};
// 题目：旋转数组 leetcode 189
// 说明：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:
//   输入: [1,2,3,4,5,6,7] 和 k = 3
//   输出: [5,6,7,1,2,3,4]
// 解释:
//   向右旋转 1 步: [7,1,2,3,4,5,6]
//   向右旋转 2 步: [6,7,1,2,3,4,5]
//   向右旋转 3 步: [5,6,7,1,2,3,4]

// 示例 2:
//   输入: [-1,-100,3,99] 和 k = 2
//   输出: [3,99,-1,-100]
// 解释: 
//   向右旋转 1 步: [99,-1,-100,3]
//   向右旋转 2 步: [3,99,-1,-100]

// 解法1
var rotate = function(nums, k) {
  // 精髓是 k % nums.length, 减少了很多不必要的颠倒，因为颠倒一遍数组等于没调换位置
  k = k % nums.length
  while (k--) {
    nums.unshift(nums.pop());
  }
  return nums;
};

// 方法2：下面不是很推荐， because slice and concat will create new array
var rotate = function(nums, k) {
  var n = nums.length;
  nums = nums.slice(n - k).concat(nums.slice(0, n-k));
  return nums;
};
// 题目：移动零，leetcode 283
//描述：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
//   输入: [0,1,0,3,12]
//   输出: [1,3,12,0,0]

// 时间复杂度：O^2，splice 时间复杂度 O(n)。从数组后 => 前
var moveZeroes = function(nums) {
    let len = nums.length
    for (let i = len;i--;) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
        }
    }
    return nums
};

// 解法2
var moveZeroes = function(nums) {
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[count++] = nums[i]
      }
  }
  
  while(count < nums.length) {
      nums[count++] = 0
  }
  return nums
};
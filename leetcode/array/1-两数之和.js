/**
题目： 两数之和 
leetcode 1

说明：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
*/

// 解法1：O^2
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// 解法2：精髓：相加等于目标值，等同于目标值减去任意一个值等于另一值
//   1. 把 index 和 value 兑换，储存于一个对象中
//   2. 借助对象，遍历这个数组，如果目标值 target - 遍历项，是否能找到，如果能找到，则保存这个下标，不能找到，则保存于对象中
var twoSum = function(nums, target) {
  const ans = [];
  const exist = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (typeof exist[target - nums[i]] !== 'undefined') {
          ans.push(exist[target-nums[i]])
          ans.push(i)
      }
      exist[nums[i]] = i;
  }
  return ans
};
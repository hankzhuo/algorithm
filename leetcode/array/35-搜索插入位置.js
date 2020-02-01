/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0
*/

// 二分查找，时间复杂度 O(logn)，空间复杂度 O(1)
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, mid = 0;

  if (nums[left] === target) {
      return left;
  }
  
  if (nums[right] === target) {
      return right;
  }

  if (nums[left] > target) {
      return 0;
  }

  if (nums[right] < target) {
      return right + 1;
  }

  while (left < right && (right - left > 1)) {
      mid = Math.floor((right - left) / 2) + left;
      if (nums[mid] === target){
          return mid;
      } else if (nums[mid] > target) {
          right = mid;
      } else if (nums[mid] < target) {
          left = mid;
      }
  }
  // 数组内没找到 target，但 target 在数组范围内
  if (nums[left] < target && nums[right] > target) {
      return left + 1;
  }
};
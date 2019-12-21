/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

// 贪心算法
var maxSubArray = function(nums) {
  var dp = new Array(nums.length);
  dp[0] = nums[0];
  let sum = nums[0];

  for (let i = 1; i< nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (sum < dp[i]) {
      sum = dp[i]
    }
  }
  console.log(dp) // [ -2, 1, -2, 4, 3, 5, 6, 1, 5 ]
  return sum;
}; 
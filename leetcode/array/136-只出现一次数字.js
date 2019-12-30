// 题目：只出现一次数字 
// leetcode 136
// 说明：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 示例 1:
//   输入: [2,2,1]
//   输出: 1
  
// 示例 2:
//   输入: [4,1,2,1,2]
//   输出: 4

// 解法1：时间复杂度 O(n)，空间复杂度 O(n)
var singleNumber = function(nums) {
    let obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key
        }
    }
};

// 解法2：按位运算，按位异或。
var singleNumber = function(nums) {
    let ans = nums[0];
    if (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            ans = ans ^ nums[i];
        }
    }
    return ans
};
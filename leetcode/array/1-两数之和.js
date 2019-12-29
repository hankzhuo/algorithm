/**
题目： 两数之和 

说明：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
*/

// 暴力解法：时间复杂度 O(n^2)、空间复杂度 O(n1)
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// 解法2：借助空间换时间的思维，先将每个元素的值和它的索引添加到 Hash 表中，然后第二次遍历，检查目标元元素 - 每个元素是否在 Hash 表中
// 时间复杂度 O(n)、空间复杂度 O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    
    for (let j = 0; j < nums.length; j++) {
        let rest = target - nums[j];
        // 相减得到的元素，是否在 hash 表中，且不等于自身
        if (map.has(rest) && map.get(rest) !== j) {
            return [j, map.get(rest)]
        }
    }
    return []
};
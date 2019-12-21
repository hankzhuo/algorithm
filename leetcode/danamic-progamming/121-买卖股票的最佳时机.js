/**
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/

var maxProfit = function(prices) {
  if(prices.length === 0) return 0;

  var length = prices.length;
  var dp = new Array(length);
  // 创建二维数组
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array()
    for (var j = 0; j < 2; j++) {
      dp[i][j] = j;
    }
  }

  for (var i = 0; i < length; i++) {
    if (i - 1 == -1) {
        dp[i][0] = 0;
        // 解释：dp[i][0] = max(dp[-1][0], dp[-1][1] + prices[i]) = max(0, -infinity + prices[i]) = 0
        dp[i][1] = -prices[i];
        //解释： dp[i][1] = max(dp[-1][1], dp[-1][0] - prices[i]) = max(-infinity, 0 - prices[i])  = -prices[i]
        continue;
    }
    // 某天没有留股票情况：1. 前一天没有股票，第二天休息  2. 今天有股票 - 今天卖掉股票
    // 某天有留股票情况：1. 前一天有股票，第二天休息  2. 今天刚买股票
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  }
  
  return dp[length - 1][0];
};

// 新状态只和相邻的一个状态有关，其实不用整个 dp 数组，只需要一个变量储存相邻的那个状态就足够了，这样可以把空间复杂度降到 O(1)
var maxProfit = function(prices) {
  if(prices.length === 0) return 0;
  var length = prices.length;
  var dp_i_0 = 0; dp_i_1 = -Infinity;
  
  for (var i = 0; i < length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }  
  return dp_i_0;
}
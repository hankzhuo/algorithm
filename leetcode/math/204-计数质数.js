/**
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
*/

var countPrimes = function(n) {
  var primes = new Array(n).fill(true);
  
  for (var i = 2; i < n; i++) {
    if (primes[i]) {
      // 将 i 的 2 倍、3 倍、4 倍...标记为非质数
      for (var j = i * 2; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  
  var count = 0;
  for (var i = 2; i < n; i++) {
    if (primes[i]) count++;
  }
      
  return count;
}

// 此法超时
// var countPrimes = function(n) {
//   let count = 0;
//   let num = 0
//   while (count < n) {
//     if ((count % 2 !== 0 && count % 3 !== 0 && count !== 1) || count === 2 || count === 3) {
//       num++
//     }
//     count++
//   }
//   return num
// };
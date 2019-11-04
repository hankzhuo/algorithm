/**
 * @description 递归
 * 1. 编写递归代码的关键是，只要遇到递归，我们就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤
 * 注意点：
 *  1. 递归代码要注意堆栈溢出
 *  2. 递归代码要警惕重复计算 
 */

// 斐波那契数
// 题目：数列：1、1、2、3、5、8、13、21、34....，即第一项 f(1) = 1,第二项 f(2) = 1.....,第 n 项目为 f(n) = f(n-1) + f(n-2)。求第 n 项的值是多少。
// 1. 第一递归函数的功能
function fn(n) {
  // 2. 递归结束条件：fn(2) = fn(1) = 1
  if (n <= 2) {
    return 1;
  }
  // 3. 找出函数的等价关系式：fn = fn(n - 1) + fn(n - 2)
  return fn(n - 1) + fn(n - 2);
}

// 优化：避免重复计算
const hashObj = {}
function fn(n) {
  // 2. 递归结束条件：fn(2) = fn(1) = 1
  if (n <= 2) {
    return 1;
  }
  // 避免计算
  if (hashObj[n]) {
    return hashObj[n]
  }
  // 3. 找出函数的等价关系式：fn = fn(n - 1) + fn(n - 2)
  const result = fn(n - 1) + fn(n - 2);
  hashObj[n] = result;
  return result;
}
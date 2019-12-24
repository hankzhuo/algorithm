/**
写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

n = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

var fizzBuzz = function(n) {
  let count = 1;
  let result = []
  while (count <= n) {
    if (count % 15 === 0) {
      result.push('FizzBuzz')
    } else if (count % 3 == 0) {
      result.push('Fizz')
    } else if(count % 5 == 0) {
      result.push('Buzz')
    } else {
      result.push(count.toString())
    }
    count++
  }
  return result
};
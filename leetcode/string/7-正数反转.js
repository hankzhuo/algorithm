/**
题目：整数反转

说明：给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
 输入: 123
 输出: 321

示例 2:
 输入: -123
 输出: -321

示例 3:
 输入: 120
 输出: 21

注意: 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
*/

var reverse = function(x) {    
    let rev = 0, flag = 1;
    let maxInteger = Math.pow(2, 31) - 1; // 考虑溢出最大数

    if (x < 0) {
        flag = -1;
        x = -x;
    }

    while (x !== 0) {
        let pop = parseInt(x % 10);
        x = parseInt(x / 10);
        
        // 考虑溢出问题，temp = rev * 10 + pop 时会导致溢出
        if (rev > maxInteger / 10 || (rev == maxInteger / 10 && pop > 7)) return 0;
        
        rev = rev * 10 + pop;
    }
    
    return rev * flag;
};

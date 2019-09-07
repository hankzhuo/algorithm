/**
 * @description 二分查找
 * 1. 二分查找一来顺序表结构，比如数组
 * 2. 二分查找的数据必须是有序的，所以无序数据要先排序
 * 3. 数据太小太大也不适合二分查找。数据太小，直接用遍历。数据太大，比如 1 GB 大小的数据，如果用数组来存，则需要 1 GB 的连续储存空间。
 * 2. 时间复杂度 log(n)
 */

// 下面都是数据中不存在重复元素情况
// 已经排好序
function binarySearch(arr, val) {
  if (arr.length < 2) return arr;
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1); // 位运算比除法运算更快

    if (arr[mid] < val) {
      low = mid + 1
    } else if (arr[mid] > val) {
      high = mid - 1
    } else {
      return mid;
    }
  }

  return -1;
}
const arr = [1, 3, 4, 5, 6, 8, 9]
console.log(binarySearch(arr, 8))

// 递归实现
function bSearch(arr, val) {
  if (arr.length < 2) return arr;
  return binarySearch1(arr, val, 0, arr.length - 1)
}

function binarySearch1(arr, val, low, high) {
  if (low > high) return -1;

  let mid = low + ((high - low) >> 1);
  if (arr[mid] < val) {
    return binarySearch1(arr, val, mid + 1, high)
  } else if (arr[mid] > val) {
    return binarySearch1(arr, val, low, mid - 1)
  } else {
    return mid;
  }
}

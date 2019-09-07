/**
 * 4 种常见的二分查找变形问题
 * 1. 包含重复元素
 */

// 查找第一个值等于给定值的元素
function binarySearch(arr, val) {
  if (arr.length < 2) return arr;
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1); // 位运算比除法运算更快
    if (arr[mid] < val) {
      // 说明要找的值在 [mid + 1, high] 区间
      low = mid + 1
    } else if (arr[mid] > val) {
      // 说明要找的值在 [low, mid - 1] 区间
      high = mid - 1
    } else {
      // 如果 mid 等于 0，说明是第一个元素。
      // 此时 arr[mid] === val，判断 mid 前面元素是否也等于目标，如果不等于，则是第一个元素，否则要找的值在 [low, mid - 1] 区间
      if (mid === 0 || arr[mid - 1] !== val) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }
  return -1;
}
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 9]
console.log(binarySearch(arr, 8))


// 查找最后一个值等于给定值的元素
function binarySearch2(arr, val) {
  if (arr.length < 2) return arr;
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (arr[mid] < val) {
      low = mid + 1
    } else if (arr[mid] > val) {
      high = mid - 1
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== val) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1;
}
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 9]
console.log(binarySearch2(arr, 8))


// 查找第一个大于等于给定值的元素
function binarySearch3(arr, val) {
  if (arr.length < 2) return arr;
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < val) {
      // 说明要找到的值在 [mid + 1, high] 区间
      low = mid + 1
    } else if (arr[mid] >= val) {
      if (mid == 0 || arr[mid - 1] < val) {
        return mid
      } else {
        // 第一个大于等于 val 值在 [low, mid] 之间
        high = mid - 1;
      }
    }
  }
  return -1;
}
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 9]
console.log(binarySearch3(arr, 8))


// 查找最后一个小于等于给定值的元素
function binarySearch4(arr, val) {
  if (arr.length < 2) return arr;
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] <= val) {
      if (mid === arr.length - 1 || arr[mid + 1] > val) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > val) {
      high = mid - 1;
    }
  }
  return -1;
}
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 9]
console.log(binarySearch4(arr, 8))
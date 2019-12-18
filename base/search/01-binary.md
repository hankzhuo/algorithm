## 二分查找

二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。

时间复杂度是 O(logn)

**二分查找应用场景的局限性**
- 二分查找依赖的是顺序表结构，简单点说就是数组
- 二分查找针对的是有序数据
- 数据量太小不适合二分查找，顺序遍历即可
- 数据量太大也不适合二分查找，要求内存连续

```js
// 数据是有序，无重复情况
const biaryFind = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (target === sortedArr[mid]) {
            return mid
        } else if (target < sortedArr[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(biaryFind(arr, 44))
console.log(biaryFind(arr, 1))
console.log(biaryFind(arr, 102))
console.log(biaryFind(arr, 1111))
```


如果存在重复元素
```js
// 查找第一个等于给定值
const biaryFindFirst = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (target < sortedArr[mid]) {
            high = mid - 1
        } else if (target > sortedArr[mid]) {
            low = mid + 1
        } else {
            // 如果是数组的第一个元素或上一个元素小于目标值
            if (mid === 0 || sortedArr[mid - 1] < target) return mid
            high = mid - 1
        }
    }
    return -1
}

// 查找最后一个相等的数
const biaryFindLast = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (target < sortedArr[mid]) {
            high = mid - 1
        } else if (target > sortedArr[mid]) {
            low = mid + 1
        } else {
            if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
            low = mid + 1
        }
    }
    return -1
}

// 查找第一个大于等于给定值的元素
const biaryFindFistBig = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (target <= sortedArr[mid]) {
            if (mid === 0 || sortedArr[mid - 1] < target) return mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

// 查找最后一个小于等于给定值的元素
const biaryFindLastSmall = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (target < sortedArr[mid]) {
            high = mid - 1
        } else {
            if (mid === sortedArr.length - 1 || sortedArr[mid + 1] >= target) return mid
            low = mid + 1
        }
    }
    return -1
}
```
/**
 * @description 线性排序：桶排序、计数排序、基数排序
 * 1. 时间复杂度可以做到 O(n)
 */

/**
* 桶排序
* 1. 桶排序适合用在外部排序中。所谓的外部排序就是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中。
* 如果要排序的数据有 n 个，我们把它们均匀地划分到 m 个桶内，每个桶里就有 k=n/m 个元素。每个桶内部使用快速排序，时间复杂度为 O(k * logk)。m 个桶排序的时间复杂度就是 O(m * k * logk)，因为 k=n/m，所以整个桶排序的时间复杂度就是 O(n*log(n/m))。当桶的个数 m 接近数据个数 n 时，log(n/m) 就是一个非常小的常量，这个时候桶排序的时间复杂度接近 O(n)。
*/
function bucketSort(arr, bucketSize = 5) {
  const length = arr.length;
  if (length <= 1) return arr;

  // 首先确定数据的范围
  let min = arr[0], max = arr[0];
  for (let i = 0; i < length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    } else if (max < arr[i]) {
      max = arr[i]
    }
  }

  // 确定桶的数量。不能保证被整除，所以 +1 个桶放剩余数据
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  // 桶是个二维数组
  let buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }

  // 把数据分别放进不同的桶中
  for (let i = 0; i < length; i++) {
    buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
  }

  arr.length = 0;
  for (let i = 0; i < bucketCount; i++) {
    // 对每个桶进行快速排序
    quickSort(buckets[i], 0, buckets[i].length - 1)
    for (let j = 0; j < buckets[i].length; j++) {
      // 对每个桶排序的数放入数组中
      arr.push(buckets[i][j])
    }
  }

  function quickSort(arr, left, right) {
    if (left < right) {
      let pivot = right;
      let partitionIndex = partition(arr, pivot, left, right)
      quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1) // 担心越界
      quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
  }

  function partition(arr, pivot, left, right) {
    let pivotVal = arr[pivot]
    let startIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotVal) {
        swap(arr, startIndex, i)
        startIndex++
      }
    }
    // 最后交换 startIndex 与 right 的值
    swap(arr, startIndex, right)
    return startIndex
  }

  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
  }
}

const bucketTest = [1, 3, 2, 3, 10, 9, 7, 6, 0, -12]
bucketSort(bucketTest)
console.log(bucketTest)


 /**
  * 计数排序
  * 1. 计数排序是桶排序的一种特殊情况，取最大值 max 作为桶的数量
  * 2. 计数排序适用于数据范围不是很大的场景，如果数据范围 k 比要排序的数据量大很多，就不适合
  * 3. 只能给非负数整数排序，如果存在其他类型，则需要转化为非负整数
  */
 function countingSort(arr) {
  let length = arr.length
  if (length <= 1) return;

  // 获取数组中最大值
  let max = arr[0];
  for (let i = 0; i < length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }

  let c = new Array(max + 1).fill(0); // 申请一个计数数组 c，下标识 [0, max]
  // 计算每个数的个数，放入 c 中
  for (let i = 0; i < length; i++) {
    c[arr[i]]++
  }

  // 依次相加
  for (let i = 1; i < c.length; i++) {
    c[i] = c[i - 1] + c[i]
  }
  // 零时数组 r，储存排序后的结果
  let r = new Array(length);
  // 关键步骤，对 arr 开始排序
  for (let i = length - 1; i >= 0; i--) {
    let index = c[arr[i]] - 1
    r[index] = arr[i];
    c[arr[i]]--;
  }

  for (let i = 0; i < length; i++) {
    arr[i] = r[i]
  }
}

const countingTest = [123, 313, 223, 318, 105, 942, 7863, 635, 291]
countingSort(countingTest)
console.log(countingTest)


/**
* 基数排序 
* 基数排序对要排序的数据是有要求的，需要可以分割出独立的“位”来比较，而且位之间有递进的关系，如果 a 数据的高位比 b 数据大，那剩下的低位就不用比较了。除此之外，每一位的数据范围不能太大，要可以用线性排序算法来排序，否则，基数排序的时间复杂度就无法做到 O(n) 了
*/
function radixSort(arr) {
  if (arr.length <= 1) return arr;

  // 获取数组中最大值
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }

  // 从个位开始，对数组 arr 按“指数”进行计数排序
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort1(arr, exp)
  }
}

function countingSort1(arr, exp) {
  let c = new Array(10).fill(0);
  // 计算每个数的个数，放入 c 中
  for (let i = 0; i < arr.length; i++) {
    c[Math.floor((arr[i] / exp) % 10)]++
  }

  // 依次相加
  for (let i = 1; i < c.length; i++) {
    c[i] = c[i - 1] + c[i]
  }

  // 临时数组
  let r = new Array(arr.length);
  // 特殊处理
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = c[Math.floor((arr[i] / exp) % 10)] - 1
    r[index] = arr[i];
    c[Math.floor((arr[i] / exp) % 10)]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = r[i]
  }
}

const radixTest = [123, 313, 223, 318, 105, 942, 7863, 635, 291]
radixSort(radixTest)
console.log(radixTest)




/**
 * 桶排序: 先分类，在桶中排序，再合并
 *  核心就是如何完成第一步：分类
 */

// 创建桶
let array = [3, 8, 6, 1, 5, 7, 9, 2, 4]
let min = Math.min(...array)    // ' ... ' 是一个拓展运算符 spread: 将一个数组转化为 ‘ ， ’分割的参数序列
let max = Math.max(...array)    // Math.max 是es6的写法 =》 es5： Math.max.apply 求出数组最大的元素
let size = 3                    // 桶的数量
let count = Math.floor((max - min) / size) + 1  // count = 3
let buckets = []
for (let i = 0; i < count; i++) {
    buckets.push([])
}
console.log(buckets)

//元素归类
for (let v of array) {
    let num = Math.floor((v - min) / size)  //num表示桶的序号，与count一样是偏移量计算
    buckets[num].push(v)
}
console.log(buckets)

//排序合并
let result = []
for (bucket of buckets) {
    result.push(...insertionSort(bucket))
}
console.log(result)

//数据量小用插入排序
function insertionSort(arr) {
    let index, current
    for (let i = 1; i < arr.length; i++) {
        index = i - 1;
        current = arr[i]
        while (index >= 0 && arr[index] > current) {
            arr[index + 1] = arr[index]
            index--
        }
        arr[index + 1] = current
    }
    return arr
}

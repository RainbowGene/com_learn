/**
 *  计数排序：
 *          1，找出待排序数组中的最大/小元素
 *          2，统计数组中每个为 i 元素的个数，存入数组C中的第 i 项
 *          3，对所有的计数累加
 *          4，反向填充目标数组：将每个元素i放在新数组的第C（i）项，每放一个元素将C（i）减去1
 * 
 *          * 作为一种线性时间复杂度的排序，必须是有确定范围的整数
 */

let arr = new Array(20)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 10)
}

function CountingSort(arr) {
    let maxValue = Math.max(...arr)
    let bucket = new Array(maxValue + 1), sortIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0
        }
        bucket[arr[i]]++
    }

    for (let j = 0; j < bucket.length; j++) {
        while (bucket[j] > 0) {
            arr[sortIndex++] = j
            bucket[j]--
        }
    }
    return arr
}

console.log(arr)
console.log(CountingSort(arr))
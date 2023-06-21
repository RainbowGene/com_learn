

let arr = new Array(20)
for (let i = 0; i < 20; i++) {
    arr[i] = Math.round(Math.random() * 100)
}

/**
 * 第一个突破 O(n^2)的排序算法，是简单插入排序的改良版
 * 它会优先排列距离较远的元素
 * 希尔排序又叫 缩小增量排序
 * @param {*} arr 
 */

// function ShellSort(arr) {
//     var len = arr.length
//     for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
//         for (var i = gap; i < len; i++) {
//             var j = i
//             var current = arr[i]
//             while (j - gap >= 0 && current < arr[j - gap]) {
//                 arr[j] = arr[j - gap]
//                 j = j - gap
//             }
//             arr[j] = current
//         }
//     }
//     return arr
// }

function ShellSort(arr) {
    let len = arr.length
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i]
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap]
                j = j - gap
            }
            arr[j] = current
        }
    }
    return arr
}

console.log(arr)
console.log(ShellSort(arr))


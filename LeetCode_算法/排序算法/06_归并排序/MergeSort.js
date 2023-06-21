

/**
 * 归并排序
 * 描述：1，把长度为n的输入序列分成两个长度为n/2的子序列；
 *      2，对这两个子序列分别采用归并排序
 *      3，合并子序列
 */

function mergeSort(arr) {   //采用自上而下的递归方法
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len / 2)
    let left = arr.slice(0, middle)     //slice对原数组不产生任何影响
    let right = arr.splice(middle)      //splice 取出原数组中的值，产生影响
    return right
}

console.log(mergeSort([2, 5, 8, 3, 5]))
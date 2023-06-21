

/**
 * 选择排序法
 * 原理：每一次都从待排序的数据元素中选择出最大（小）的一个元素
 *      存放在序列的起始位置，直到全部待排序数据排完
 *      中间序列分为有序区（已排好）及无序区（未排好）
 *  *选择排序是不稳定的排序方法
 */

//创建随机数组
let arr = new Array(20)
for (let i = 0; i < 20; i++) {
    arr[i] = (Math.round(Math.random() * 100));
}

//选择排序
function SelectSort(arr) {
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;   //索引保存，下一步放入已排序
            }
        }
        temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}
console.log(SelectSort(arr))

//*表现最稳定的排序算法之一，因为无论什么数据进去都是O(n2)的时间复杂度，
// 所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间
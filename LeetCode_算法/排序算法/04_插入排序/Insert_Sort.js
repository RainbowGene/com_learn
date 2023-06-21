


/**
 * 插入排序
 */

//从第二位开始向前扫描，小于前一位则在往前扫描（直到大于前某位,），大于则不作处理

let arr = new Array(20)
for (let i = 0; i < 20; i++) {
    arr[i] = Math.round(Math.random() * 100)
}

console.log(arr)

function InsertSort(arr) {
    let preIndex, current
    for (let i = 1; i < arr.length; i++) {  //从数组第二位开始获取
        preIndex = i - 1;   //得到第一位的索引
        current = arr[i]    //保留第二位的值
        while (preIndex >= 0 && arr[preIndex] > current) {  //保证从后向前扫描不越界&前一位大于后一位
            arr[preIndex + 1] = arr[preIndex];      //前一位取代后一位
            preIndex--;
        }
        arr[preIndex + 1] = current     //之前保留的current为前一位的值
    }
    return arr
}

function test(arr) {
    let preIndex, current
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}

console.log(InsertSort(arr))
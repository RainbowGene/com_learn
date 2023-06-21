

/**
 * 冒泡排序
 *      排序思想:数组相邻两项进行比较，较大一项放后面，比较 arr.length-1 轮
 *      结果：从小到大排序
 */

//创建随机数组
let arr = new Array(2000)
for (var i = 0; i < 2000; i++) {
    arr[i] = (Math.round(Math.random() * 1000));
}

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

sortArray(arr)
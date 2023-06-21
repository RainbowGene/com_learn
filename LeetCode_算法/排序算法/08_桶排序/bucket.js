


/**
 * 设置一定量的桶将元素按区间放入，桶中排序，在合并桶
 * @param {*} arr 
 */

let arr = new Array(20)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 1000)
}

function InsertSort(arr) {
    let index, current
    for (let i = 1; i < arr.length; i++) {
        index = i - 1
        current = arr[i]
        while (arr[index] >= current && index >= 0) {
            arr[index + 1] = arr[index]
            index--
        }
        arr[index + 1] = current
    }
    return arr
}

function BucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1    //范围区间

    let buckets = new Array(bucketSize)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketCount)].push(arr[i])
    }

    arr.length = 0

    for (let i = 0; i < buckets.length; i++) {
        InsertSort(buckets[i])
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])
        }
    }
    return arr
}

console.log(arr)
console.log(BucketSort(arr))

//*当数值参与逻辑或运算( || )时，结果为true，会返回第一个为真的值；如果结果为false，会返回第二个为假的值

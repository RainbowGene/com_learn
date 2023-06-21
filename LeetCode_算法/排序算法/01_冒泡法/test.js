

let arr = new Array(20)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 100)
}

function BubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function FastSort(arr) {
    if (arr.length <= 1) return arr;
    else {
        let index = Math.floor(arr.length / 2)
        let current = arr.splice(index, 1)
        let left = [], right = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < current) {
                left.push(arr[i])
            }
            else {
                right.push(arr[i])
            }
        }
        return FastSort(left).concat(current, FastSort(right))
    }
}

function SelectSort(arr) {
    let minIndex, temp;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
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
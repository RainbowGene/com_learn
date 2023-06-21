

/**
 * 快速排序法
 * 排序思想：（1）在数据集之中，选择一个元素作为”基准”（pivot）。
            （2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
            （3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

// 快速排序的最坏运行情况是O(n²)，比如说顺序数列的快排。但它的平摊期望时间是O(n log n) ，且O(n log n)
// 记号中隐含的常数因子很小，比复杂度稳定等于O(n log n)的归并排序要小很多。所以，对绝大多数顺序性较弱的
// 随机数列而言，快速排序总是优于归并排序。

//创建随机数组
let arr = new Array(5)
for (let i = 0; i < 5; i++) {
    arr[i] = (Math.round(Math.random() * 100));
}

console.log(arr)

function sortQuick(arr) {
    if (arr.length <= 1) {//递归结束判断条件
        return arr;
    }
    else {
        let index = Math.floor(arr.length / 2);//取最中间的那个元素,floor向下取整  此处为  10
        let len = arr.splice(index, 1);        //取出索引为index的元素，此时 len=[ arr[index] ]
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < len) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return sortQuick(left).concat(len, sortQuick(right));   //concat方法连接两个或多个数组
    }
}

console.log(sortQuick(arr))
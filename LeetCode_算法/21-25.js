//在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。返回重复了 N 次的那个元素。
var repeatedNTimes = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        num++
      }
    }
    if (num === arr.length / 2) return arr[i]  // num>1 就能判断了 
  }
}

//console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))

//杨辉三角
var generate = function (numRows) {
  let res = []
}

// 找出数组中差距最小的元素对（有多个则输出多个）
var minimumAbsDifference = function (arr) {
  let sortArr = arr.sort((a, b) => { return a - b })  //对数组升序排列
  let res = []
  let cz = sortArr[1] - sortArr[0] //第一对相邻元素的差值
  // 遍历相邻两个元素，计算差值
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (cz > sortArr[i + 1] - sortArr[i]) {
      cz = sortArr[i + 1] - sortArr[i]
      res = []
      res.push([sortArr[i], sortArr[i + 1]])
    }
    else if (cz === sortArr[i + 1] - sortArr[i]) {
      res.push([sortArr[i], sortArr[i + 1]])
    }
  }
  return res
}

console.log(minimumAbsDifference([40, 11, 26, 27, -20]))
//[5, 6, 7, 8, 9, 89]

// 分糖果，平方一个数组，得到两个数组，其中一个数组元素种类最多
var distributeCandies = function (arr) {
  // let res = []
  // let len = arr.length / 2  //结果数组的长度
  // for (let i = 0; i < arr.length && res.length !== len; i++) {
  //   if (res.indexOf(arr[i]) === -1) {
  //     res.push(arr[i])
  //   }
  // }
  // return res.length

  return [...new Set(arr)].length < arr.length / 2 ? [...new Set(arr)].length : arr.length / 2

  // 结构数组+set去重+三元运算符
}

let arr = [1, 1, 2, 2, 3, 3]
console.log(distributeCandies(arr))

// 个位相加 : 将num上的各个位数相加，要求最终结果为一个 个位数 , 可以类推出结果为 num%9
var addDigits = function (num) {
  return num.toString().split('').map(Number).reduce((x, y) => x + y > 9 ? addDigits(x + y) : x + y)
}

console.log(addDigits(46))

// 26,岛屿周长 ： 陆地边+4，有一个相邻边-2，统计得到周长
var islandPerimeter = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        if (i > 0 && grid[i - 1][j] === 1) {  //计算左侧是否有相邻
          count -= 2
        }
        if (j > 0 && grid[i][j - 1] === 1) {  //判断上方是否有相邻
          count -= 2
        }
      }
    }
  }
  return count
}

console.log(islandPerimeter([[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]))

// 27,反转字符串
var reverseString = function (s) {
  return s.reverse()
}
console.log(reverseString(["h", "e", "l", "l", "o"]))

// 28，数组的相对排序
var relativeSortArray = function (arr1, arr2) {

}

// 29,逐步求和得到正数的最小值
var minStartValue = function (nums) {
  let res = 1, sum = res
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < 1) {
      res++
      sum = res
      i = -1  //这里重置为-1而不是0是因为for循环时先执行 i++ ，会先加一个1,导致下次累加会从nums[1]开始导致逻辑错误
    }
  }
  return res
}

console.log(minStartValue([-3, 2, -3, 4, 2]))

// nim游戏，两人每次拿1-3块石头，你作为先手，拿到最后一块石头的获胜
// 只要不被4整除，必赢。 反向思考： 如果对方要赢，必须保证剩下石头数是4的倍数
var canWinNim = function (n) {
  return (n % 4 !== 0)
}

// 1，找出车R的位置 2，判断横纵向是否有P，判断P之前是否有象（B）
var numRookCaptures = function (board) {
  let num = 0, x, y, xlen, ylen
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        xlen = board.length
        ylen = board[i].length
      }
    }
  }
  // 向右
  for (let i = x; i < xlen; i++) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      num++
      break
    }
  }
  for (let i = x; i >= 0; i--) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      num++
      break
    }
  }
  for (let i = y; i < ylen; i++) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      num++
      break
    }
  }
  for (let i = y; i >= 0; i--) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      num++
      break
    }
  }
  return num
}

console.log(numRookCaptures([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]]))

  /**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 */

var shortestToChar = function(S, C) {
  
};

console.log(shortestToChar('loveleetcode','e'))


//给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))

var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const { length } = arr;
  return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
}

console.log(findMedianSortedArrays([0, 1], [2, 3]))


// abcabcdd 输出 3 因为abc bca cab abcd 最长为4

//队列思路

let lengthOfLongestSubstring = function (s) {
    let res = 0, i = 0
    let temp = []
    while (i < s.length) {
        if (temp.indexOf(s[i]) === -1) {  //indexOf 如果检索的字符串没有出现返回 -1
            temp.push(s[i])
        }
        else {
            temp.shift()    //删除数组的第一个元素
            continue    //跳过循环中的一个迭代
        }
        res = Math.max(res, temp.length)
        i++
    }
    return res
}

let lengthOfLongestSubstring2 = function (s) {
    let res = 0
    let temp = []
    for (i = 0; i < s.length;) { //for循环 循环条件写在下面
        if (temp.indexOf(s[i]) === -1) {
            temp.push(s[i])
        }
        else {
            temp.shift()
            continue
        }
        res = Math.max(res, temp.length)
        i++
    }
    return res
}

console.log(lengthOfLongestSubstring('abcabcdd')) //最长的为 abcd
console.log(lengthOfLongestSubstring2('abcabcdd')) 
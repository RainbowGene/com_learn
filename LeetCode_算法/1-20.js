//1,石头里的宝石
// let J = "Aa", S = "aaAABBd"
// console.log(S.split('').filter(s => J.includes(s)).length)

//2,整数的各位积和差
// let num = 4325;
// let arr = num.toString().split("").map(Number).reduce((x, y) => x + y)
// console.log(arr)

//3,IP 地址无效化: 用 [.] 代替 .
//3.1)正则表达式直接计算
// let defangIPaddr = function (address) {
//   return address.replace(/\./g, '[.]')
// }

//3.2)非正则表达式版本
// let defangIPaddr2 = function (address) {
//   address = address.split('')
//   for (let i = 0; i < address.length; i++) {
//       if (address[i] === '.') {
//           address[i] = '[.]'
//       }
//   }
//   return address.join('')
// }

// console.log(defangIPaddr2('127.1.1.1'))

//4,转化为小写字母
// let str="HellO"
// console.log(str.toLowerCase())

//5,数组中每个元素替换为右侧最大元素，右侧没有则换为-1
let arr = [18, 17, 5, 6, 8, 12]
// function replaceElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const _arr = arr.slice(i + 1)
//     arr[i] = _arr.length ? Math.max(..._arr) : -1;
//     //arr[i] = _arr.length ? Math.max.apply(null,_arr) : -1;
//   }
//   return arr
// }

//函数解析
/** slice(start,end):
 *      start ： 必须，规定从何处开始选取，可以取负值，从尾部选取
 *      end : 可选，规定何处结束选取，如果不指定，则选取到数组结束的所有元素
 *  返回一个新的数组，且不会修改原数组
 *
 * apply(): 可传入数组,
 *    Math.max.apply(null, _arr)
 * 
 * es6 写法：扩展运算符取代apply
 *    Math.max(..._arr)
 *    还可以应用到数组的其他操作中去
 * */


//  斐波拉契数列
function fib(n) {
  if (n <= 1) {
    return n
  }
  // return fib(n - 1) + fib(n - 2)
  let a = 0, b = 1
  for (let i = 2; i <= n; i++) {
    b = a + b;
    a = b - a;
  }
  return b
}

//6汉明距离：1，十进制转二进制，2，二进制字符对比，不同的为多少
//使用 ^ 位运算符，相同为0，不同为1
function hm(x, y) {
  return (x ^ y).toString(2).split("").filter(s => s === '1').length
}

//7,有序数组的平方,并递增排序
function sortedSquares(arr) {
  return arr.map(x => x * x).sort((a, b) => a - b)
}

//8,在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
//  给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
function balancedStringSplit(s) {
  let count = 0;
  let clus = { R: 0, L: 0 }
  for (let i = 0; i < s.length; i++) {
    clus[s[i]]++
    console.log(clus)
    if (clus.R === clus.L) count++
  }
  return count
}

//9.返回数组: 长度为n且不由n组成和为0的数组
function sumZero(n) {
  let result = [], i;
  if (n == 1) return [0];
  else {
    i = n % 2 == 0 ? 1 : 0;
    for (i; i <= n / 2; i++) {
      if (i === 0) {
        result.push(i)
      }
      else {
        result.push(i);
        result.push(-i);
      }
    }
    return result
  }
}

//10,翻转图像
result = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]

function flipAndInvertImage(arr) {
  //方法一
  // for (let i = 0; i < arr.length; i++) {
  //   //先翻转
  //   arr[i].reverse()
  //   //再替换
  //   for (let j = 0; j < arr[i].length; j++) {
  //     arr[i][j] = arr[i][j] === 0 ? 1 : 0
  //   }
  // }
  // return arr

  //方法二
  return arr.map(item => item.reverse().map(item1 => item1 === 0 ? 1 : 0))
}

console.log(flipAndInvertImage(result))







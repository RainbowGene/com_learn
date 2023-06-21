

//斐波拉契数列
//普通版
function Fbolaqie(n) {
    if (n <= 1) { return 1 }
    return Fbolaqie(n - 1) + Fbolaqie(n - 2)
}
//* n较大时会导致栈溢出

//优化版
function Yfbolaxie(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2 }
    return Yfbolaxie(n - 1, ac2, ac1 + ac2)
}

//循环版：给初始值，不断累加，使用了结构赋值
function Xun(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    let ac1 = 1, ac2 = 1
    for (let i = 2; i < n; i++) {
        [ac1, ac2] = [ac2, ac1 + ac2]
    }
    return ac2
}

//打印数列1
var num = [0, 1];

function figure() {
    if (num.length < 50) {
        var newNum = num[num.length - 1] + num[num.length - 2]
        num.push(newNum)
        figure()
    } else {
        return false
    }
}
figure()
console.log(num)

//打印2
function f(x) { return x < 1 ? 0 : (x < 3 ? 1 : f(x - 2) + f(x - 1)) }
function pf2(n) {
    for (let i = 0; i < n; i++) {
        console.log(f(i) + ',')
    }
}
pf2(2)
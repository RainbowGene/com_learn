
// 正则 (邮箱、电话等)
let arr = {
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,  // 邮箱
    phone: /^1[3-9]\d{9}$/, // 电话
    idCard: /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[\dX]$/, // 身份证号
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, // 密码:包含英文数字 字符数>=8
    https: /^(https?|ftp):\/\/[^/\s]+\/[^?\s]*\??[^#\s]*(#\S*)?$/,  // url 地址
}

/**
 * 
 * @param {验证规则的类别} type 
 * @param {传入值} value 
 * @returns 
 */
function validateEmail(type, value) {
    const regex = arr[type] || null;
    if (!regex) return false; // 非法类型
    return regex.test(value);
}

// 验证
console.log(validateEmail('https', 'file:///C:/Users/17673/'));

// 更多正则可参考：https://zhuanlan.zhihu.com/p/33683962

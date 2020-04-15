var str = 'ertefvzdgfergsegfsdrgrgfbshtrh';
// 第六种方法
let arr = str.split('').sort((a, b) => b.localeCompare(a)).join('');
let count = 0,
    val = '';
for (let i = arr.length; i > 0; i--) {
    let reg = new RegExp('([a-zA-Z])\\1{' + (i - 1) + '}', `g`),
        flag = false;
    arr.replace(reg, (content, $1) => {
        // console.log(content, $1);
        count = content.length;
        val += $1;
        flag = true;
    });
    if (flag) break;
};
console.log(count,val);

// 第五种方法
/* let arr = str.split('').sort((a, b) => b.localeCompare(a)).join('').match(/([a-zA-Z])\1+/g).sort((a,b) => b.length - a.length);
// console.log(arr);
let count = arr[0].length,
    val = [];
arr.forEach(item => {
    if (item.length === count) {
        val.push(item.substr(0,1));
    }
});
console.log(count, val); */

// 第四种方法
/* let arr = str.split('').sort((a, b) => b.localeCompare(a)).join('').match(/([a-zA-Z])\1+/g);
console.log(arr);
let count = 0,
    val = '';
arr.forEach(item => {
    if (item.length > count) {
        count = item.length;
        val = item.substr(0, 1);
    } else if (item.length === count) {
        val += '|' + item.substr(0, 1);
    }
});
console.log(count, val); */
// 第三种算法
/* let arr = str.split('').sort((a, b) => a.localeCompare(b));
// console.log(str);
let count = 1;
let val = '';
let temp = 1;
arr.forEach((item, index) => {
    if (item === arr[index + 1]) {
        count++;
        if (count > temp) {
            temp = count;
            val = item;
        }
    } else {
        count = 1;
    }
});
console.log(temp, val); */

// 第二种方法
/* let ary = str.match(/[a-zA-Z]/g);
let obj = {};
let max = 0;
let maxs = '';
// console.log(ary);
ary.forEach(item => {
    if (item in obj) {
        obj[item]++;
    } else {
        obj[item] = 1;
    }
});
for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        maxs = key;
    } else if (obj[key] === max) {
        maxs += '|' + key;
    }
}
console.log(max,maxs); */


// 第一种方法
/* let ary = [...new Set(str.split(''))],
    count = 0,
    max = '';
ary.forEach((item, index) => {
    let reg = RegExp(item, 'g');
    // console.log(reg);
    let val = str.match(reg);
    // console.log(val.length);
    if (val.length > count) {
        count = val.length;
        max = item;
    } else if (val.length === count) {
        max += '|' + item;
    }
});
console.log(count,max); */
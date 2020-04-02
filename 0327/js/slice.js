let arr = [12, 16, 1, 5, 1, 51, 15];
Array.prototype.mySlice = function mySlice(n, m) {
    let arr1 = [];
    // 判断n/m是否有传参以及输入undefined的情况
    if (n === undefined && m === undefined) {
        n = 0;
        m = arr.length;
    }else if(n === undefined) {
        n = 0;
    } else if (m === undefined) {
        m = arr.length;
    }
    // 当输入的为小数时，正数向下取整，负数向上取整
    // 当m/n为负数时的处理方法
    if (n < 0 && m < 0) {
        n = Math.ceil(n);
        m = Math.ceil(m);
        n = arr.length + n;
        m = arr.length + m;
    } else if (n < 0) {
        n = Math.ceil(n);
        m = Math.floor(m);
        n = arr.length + n;
    } else if (m < 0) {
        n = Math.floor(n);
        m = Math.ceil(m);
        m = arr.length + m;
    } else {
        n = Math.floor(n);
        m = Math.floor(m);
    }
    // 判断m/n的值的大小和是否为有效数字
    isNaN(n) ? n = 0 : null;
    if (n < m && !isNaN(m) && m < arr.length + 1 && n < arr.length + 1) {
        for (let i = n; i < m; i++) {
            arr1[arr1.length] = this[i];
        }
    }
    return arr1;
}
console.log(arr.mySlice(2 , 5));
console.log(arr.mySlice(5 , 2));
console.log(arr.mySlice(-6 , -3));
console.log(arr.mySlice(-6 , '-3'));
console.log(arr.mySlice(false , true));
console.log(arr.mySlice(0 , [5]));
console.log(arr.mySlice(undefined));
console.log(arr.mySlice());
console.log(arr.mySlice(1 , function(){}));
console.log(arr.mySlice(null));
console.log(arr.mySlice(2,{a:12}));
console.log(arr.mySlice(2.5 , 3.5));
console.log(arr.mySlice(-4.5 , -3.5));
console.log(arr.mySlice(NaN));
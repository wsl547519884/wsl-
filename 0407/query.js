let str = 'https://baicu.com?abc=123&zf=666&px=888&_=t';
let reg = /([^?&]+)=([^?&]+)/g;
RegExp.prototype.queryParams = function queryParams(str) {
    let obj = {};
    let res = this.exec(str);
    while (res) {
        obj[res[1]] = res[2];
        res = this.exec(str);
    };
    return obj;
};
console.log(reg.queryParams(str));
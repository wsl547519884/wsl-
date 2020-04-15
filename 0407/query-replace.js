let str = 'https://baicu.com?abc=123&zf=666&px=888&_=t#vido',
    obj = {};
String.prototype.query = function query() {
    this.replace(/#([^#?&=]+)/g, (_, glob) => {
        obj['HASH'] = glob;
    });
    this.replace(/([^#?&=]+)=([^#?&=]+)/g, (_,glob,glob1) => {
        obj[glob] = glob1;
    });
    return obj;
};
console.log(str.query());
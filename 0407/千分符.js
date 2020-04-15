let str = '124252343';
String.prototype.millimeter = function millimeter() {
    /* let str = this.split('').reverse().join('');
    // console.log(str);
    str = str.match(/\d{1,3}/g).join(',').split('').reverse().join('');
    return str; */

    return this.replace(/\d{1,3}(?=(\d{3})+$)/g, val => val + ',');
}
console.log(str.millimeter());
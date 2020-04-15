let str = '130406199911182731';
let rge = /\d{6}((?:19|20)\d{2})(0\d|1[012])(0\d|[12]\d|3[012])\d{2}(\d)(?:\d|x)/;
let arr = rge.exec(str);
console.log(`${arr[1]}年${arr[2]}月${arr[3]}日${arr[4]%2===0 ? '女' : '男'}`);
console.log(rge.exec(str));
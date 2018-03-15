//require操作的时候其实是去硬盘中读js文件
//把放入module对象当中去 ，内存中(缓存中) 只返回重要的代码 module.exports = ***
var add = require('./add.js');

console.log(add(1,3));
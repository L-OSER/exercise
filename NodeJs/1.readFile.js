//引入一个模块，模块名叫fs
var fs = require('fs');
//异步读文件
fs.readFile('./require/readFilefoo.js','utf8',function(err,data){
	console.log(data);

})
 //同步上读取文件  
var data = fs.readFileSync('./require/readFilefoo.js','utf8');
	console.log(data);

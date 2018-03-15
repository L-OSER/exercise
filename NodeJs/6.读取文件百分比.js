'use strict'

const fs = require('fs');

const rs = fs.createReadStream('VSCodeSetup-stable.exe');
const ws = fs.createWriteStream('VSCodeSetup-stable1.exe');

//取文件相对应的stats对象
var stats = fs.statSync('VSCodeSetup-stable.exe');

//文件大小
var count = stats.size;

var datalength = 0;

//chunk是一个buffer
console.log(count)
rs.on('data',function(chunk){
    //每得到一个chunk（buffer）,取一次长度并且加到data的值里面去
    datalength = datalength+chunk.length;

    console.log("传输进度:"+parseInt(datalength/count*100)+"%");
    ws.write(chunk);

});

rs.on('end',function(){
	console.log('传输结束');
	ws.end();
})
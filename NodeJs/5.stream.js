    'use strict'
    const fs = require('fs');

    const rs = fs.createReadStream('./01.js');
    const ws = fs.createWriteStream('./01copy.js');
    // rs.pipe(ws)
    // 通过data事件监听读文件的过程
    // chunk我们读到的一小块数据
    rs.on('data',function(chunk){
    	console.log(chunk.length)
    	ws.write(chunk);
    })

    //end事件表示结束了
    //
    rs.on('end',function(){
    	console.log('结束了');
    	ws.end();
    })
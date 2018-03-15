'use strict'
const http = require('http');
const fs = require('fs');

//创建一个服务器的实例，创建的是http.Server这个对象
const server = http.createServer();
//引入querystring模块
const querystring = require('querystring');

const url = require('url');

server.on('request',(req,res)=>{

	var urlObj = url.parse(req.url,true);
    //传入true转为对象

	// console.log(urlObj.pathname);
	// console.log(urlObj.query);

	// res.end();
	var pathname = urlObj.pathname;
	var query = urlObj.query;
     if(req.method=='GET'&&pathname=='/http.html'){
          
           fs.readFile('./http.html','utf8',function(err,data){
	            console.log(query);
           		res.end(data);

           })

           	}
           	else if(pathname=='/postData'&&req.method=='POST'){
           		var data = '';
           		req.on('data',function(chunk){
           			data = data+chunk;
           		})
           		req.on('end',function(){
           			console.log(data);

           			var dataObj = querystring.parse(data)
           			//使用parse格式化参数，把string转obj
           			console.log(dataObj);

           			res.end('123')
           		})
           	}

});

server.listen(3000);

'use strict'
const http = require('http');
//创建一个服务器的实例，创建的是http.Server这个对象
const server = http.createServer();

const fs = require('fs');

//引入querystring模块
const querystring = require('querystring');

//监听request事件，当有请求发送给服务器的时候，触发了request事件
//触发完成了就调用callback函数了
//请求对象request\响应对象response
//http模板帮你去做了封装，请求报文封装到了request对象里面。
//http.IncomingMessage是request,除了是一个对象外，还是一个读文件流
//使用response里面的方法构造响应报文，调用response里面的方法，将响应报文扔回去

//response是http.ServerResponse对象 是一个写文件流
/*server.on('request',function (request,response){
  
           //参数1.状态码，2.往报文头里写的内容
           response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
           //向响应报文的报文体写内容
           //
           // console.log(request.headers);
           console.log(request.method);
             console.log(request.method);
           console.log(request.url);
           // response.write('hello');

           if(request.method=='POST'&&request.url=='/login'){
           response.end('success');

           }
           if(request.method=='GET'&&request.url=='/login'){
           response.end('<h1>登录</h1>');

           }
         

           // response.end();

})
*/
 
 server.on('request',function(req,res){
           res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
           console.log(req.url);
           if(req.method=='GET'&&req.url=='/http.html'){
          
            fs.readFile('./http.html','utf8',function(err,data){
           		
           		res.end(data);

           })

           	}
           	else if(req.url=='/postData'&&req.method=='POST'){
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
 })

server.listen(3000)
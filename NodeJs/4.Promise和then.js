'use strict'

 const fs=require('fs');
 
  var rf = function(){
  	return new Promise(function (resolve,reject){

  		fs.readFile('01.js','utf8',(error,data)=>{
  			if(error){
  				reject(error);
  			}else{
  				resolve(data)
  			}
  		})

  	})
  }

//then里面的第一个方法是成功，第二个方法都是失败

  rf().then(function(data){
  	 console.log('执行成功')
  },function(err){
  	console.log('执行失败')
  })
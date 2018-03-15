//模拟require
function MyRquire(path){
     function Module(){
     	this.exports = {}
     }

     var fs = require('fs');

     //同步读文件
   //我们读出来的代码source
     var source = fs.readFileSync(path,'utf8');

     //拼接代码变成一个函数的string
     var package = '(function(exports,module){'+source+' return module.exports})';
     var packObj=eval(package);

      //调用构造函数创建module
       var module=new Module();
      //   var exports=module.exports   把module.exports当实参传入，exports当形参去接
      var obj = packObj(module.exports,module);

      return obj;


}

var foo= MyRquire('./require/myfoo.js');
console.log(foo.a);

var foo=function(v){ return v;}
var foo=v=>v;
// 当函数体没有参数有返回值的时候

var foo=function(){ return v;}

var foo=()=>v;
// 当函数体有多个参数有返回值的时候

var foo=function(v1,v2){ return v1+v2;}
var foo=(v1,v2)=>v1+v2;
// 当函数体有多个参数没有返回值的时候
var foo=function(v1,v2){ 
  console.log(v1); console.log(v2);
  }
var foo=(v1,v2)=>{
  console.log(v1); console.log(v2);
  };
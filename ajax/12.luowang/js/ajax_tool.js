

function ajax_get(url,data){
    // 异步对象
    var ajax = new XMLHttpRequest();

    // 发送请求
    // 如果data有值
    if (data) {
        url+='?';
        url+=data;

    };
    
        ajax.open('get',url);

        ajax.send();

        ajax.onreadystatechange = function(){
            // console.log(ajax.responseText);
            if(ajax.readyState ==4 && ajax.status ==200){
           return ajax.responseText;

            }
        }
}

function ajax_post(url,data){
    // 异步对象
    var ajax = new XMLHttpRequest();

    // 发送请求


        ajax.open('post',url);
  
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        ajax.send(data);

        ajax.onreadystatechange = function(){
             if(ajax.readyState ==4 && ajax.status ==200){
           return ajax.responseText;
                
            }
        }
}




// get和post封装
/*
       参数1:url
       参数2:数据
       参数3:请求的方法
       参数4:数据成功后 调用 的方法
 */

function ajax_tool(url,data,method,success){
        // 异步对象
    var ajax = new XMLHttpRequest();

    // 发送请求
      if(method =='get'){

          if(data){
             url+='?';
             url+=data;
          }

        ajax.open(method,url);

      }else{
        ajax.open(method,url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

      }


  

        ajax.send(data);

        ajax.onreadystatechange = function(){
           // return ajax.responseText;
              if(ajax.readyState ==4 && ajax.status ==200){
                // return ajax.responseText;
                // 传入回调函数
                success(ajax.responseText)
                // console.log(ajax.responseText);
            }

        }
}


// 将工具函数 进行优化 只接收一个参数 对象
/*
       url:请求的url
       data:发送的数据
       method:请求的方法
       success:数据成功后 调用 的方法
 */

function ajax_tool_pro(option){
        // 异步对象
    var ajax = new XMLHttpRequest();

    // 发送请求
      if(option.method =='get'){

          if(option.data){
             option.url+='?';
             option.url+=option.data;
          }

        ajax.open(option.method,option.url);

      }else{
        ajax.open(option.method,option.url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

      }


  

        ajax.send(option.data);

        ajax.onreadystatechange = function(){
           // return ajax.responseText;
              if(ajax.readyState ==4 && ajax.status ==200){
                // return ajax.responseText;
                // 传入回调函数
                option.success(ajax.responseText)
                // console.log(ajax.responseText);
            }

        }
}
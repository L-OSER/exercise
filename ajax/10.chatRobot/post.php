<?php

  $message = $_POST['message'];
/*
  $chatMessages = array(
                 '讨厌',
                 '你好哦',
                 '哦',
                 '你是谁',
                 '有毛病'
              );
  // 从数组随机挑取
  // array_rand(array,number)
  // 参数1 获取的数组
  // 参数2 获取几个 随机的键
 $key =  array_rand($chatMessages,1);


 echo $chatMessages[$key]*/

  switch ($message) {
      case '你好':
          //读取json文件
          $jsonArr = file_get_contents('chat_json.json');
          //str转换为php数组
          $fileArr = json_decode($jsonArr);
          //获取随机的键值
          $key = array_rand($fileArr,1);
          echo $fileArr[$key];
          break;
      
      default:
          # code...
          break;
  }

?>
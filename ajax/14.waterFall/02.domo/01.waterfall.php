<?php

  //读取json文件string
 $jsonStr = file_get_contents('info/data.json');
  
  //转化为 php数组 array
  $totalArr = json_decode($jsonStr);

  //从数组中随机 获取 10个值
  
   $phpArray =array_rand($totalArr,10);
  
  // print_r($phpArray);

  //准备一个新数组
   $newArr = array();

  //使用 随机的 key 去取随机的值count(数组) 可以获取 php中数组的长度
   for($i = 0;$i<count($phpArray);$i++){
     //获取索引数组中的 每一个key
     $key = $phpArray[$i];
     //使用 key 从 总数组中获取 key对应的值 对象
     $obj = $totalArr[$key];

     //丢到一个新的数组里面去
     $newArr[$i] = $obj;


   }
  //将这10个值 转化为 json格式字符串
   // print_r($newArr);
   echo json_encode($newArr);
?>
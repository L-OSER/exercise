<?php

     //获取post数据
   $key = $_POST['name'];
  
  // 获取 一个value 这里使用 关系型数组
  
  $imgArr = array(
      'mr' => array('mr.jpg','漩涡鸣人' ),
      'zz' => array('zz.gif','宇智波佐助' ),
      'xy' => array('xy.jpg','小樱' )

    );


  // 传入key 获取 对应的value
 $value = $imgArr[$key];

  //返回浏览器
 echo $value[0];

//方便于js截取字符串分割数组
 echo '|';


 echo $value[1];

?>
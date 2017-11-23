<?php

  header('content-type:text/html;charset = utf-8');
 $person  = array(
        'jack' =>array('name' => 'jack','age'=>18,'skill'=>'帅'),
        'rose' =>array('name' => 'rose','age'=>16,'skill'=>'美'),
        'iceMountain'=>array('name' => 'iceMountain','age'=>24,'skill'=>'hitboat')
  );

 // 通过post获取 提交的数据 key为name
 
  $key = $_POST['username'];

  // 从数组中 获取 对应的 用户数据
  print_r($person[$key]);

  // 将获取的数据 保存到变量中 方便实用
  $onePerson = $person[$key]; 

   // 拼接成 对应的html内容 返回给用户
   
  echo '<h1>'.$onePerson['name'].'欢迎你</h1>';
  echo '<h2>真不敢相信，你这么年轻才'.$onePerson['age'].'岁</h2>';
  echo '<h3>你居然熟练掌握了'.$onePerson['skill'].'技能</h3>';

?>
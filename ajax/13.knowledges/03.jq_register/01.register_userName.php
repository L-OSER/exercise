<?php
   // 准备一个数组 用来保存 多个用户名
   $userArr = array("葫芦娃","柯南","钢铁侠","喜羊羊");

   //获取提交过来的数据
   $postName = $_POST['name'];

   // 判断 是否存在于数组中
   /*
          参数1 查询的内容
          参数2:数组
    */
  $isIn = in_array($postName,$userArr);

  if($isIn){
    echo "用户名已经被使用了，不好意思哦";
  }else{
    echo "恭喜你,可以使用这个用户名";
  }
?>
<?php

 //二维数组
$twoArr = array(
            array('青菜','白菜','娃娃菜'),
            array('猪肉','牛肉','鸡肉'),
            array('大闸蟹','生蚝','花甲')
    );
echo $twoArr[2][2];

echo '<br/>';

//php中 输出 变量的 详细内容 print_r() 是一个 php预定义的函数 传递参数的 方式直接在括号中 写入即可

print_r($twoArr[2])

?>
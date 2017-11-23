<?php
  header('content-type:text/html;charset = utf-8');

 print_r($_FILES);
echo "<br/>";

 // 获取上传的文件信息 关系型数组
 $fileArr = $_FILES['upFile'];

// 获取上传的文件的原本名字
$fileName = $fileArr['name'];

echo $fileName."<br/>";
$filePath = $fileArr['tmp_name'];
echo $filePath."<br/>";
move_uploaded_file($filePath, $fileName);
?>
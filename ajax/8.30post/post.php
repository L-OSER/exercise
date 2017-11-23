<?php
  
   header('content-type:text/html; charset=utf-8');

  echo '<h1>'.$_POST['userName'].'你好啊，欢迎你</h1>';
 for ($i=0; $i<10; $i++) { 
     echo  $i.'你好';
     echo "<br>";
 }
?>
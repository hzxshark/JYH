<?php
$conn = new mysqli("localhost:3306", "root", "", "database1");//连接到自己的数据库

header("content-type:text/html;charset=utf-8");#这个好使

$array = array();

$sql = "select * from list_data order by price limit 0 , 21" ;

$result = $conn->query($sql);

$row=$result->fetch_assoc();

while( $row=$result->fetch_assoc() ){
	
	$array[] = $row;//如果不用数组的方法进行变更，则传到js的数据不是标准的json字符串，无法转换；
	
	//$array[$row['id']] = $row;	
}
echo  json_encode($array);
?>

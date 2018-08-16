<?php
	$conn = new mysqli("localhost:3306", "root", "", "database1");//连接到自己的数据库
	
	#$conn->query("set names 'utf8'");//支持中文字符串；不好使唤
	header("content-type:text/html;charset=utf-8");#这个好使
	
	$tel=$_GET["tel"];//获取到input面输入的值
	
	$sql="select count(*) as num from jyhlist where tel='$tel'";//查询有几个同名的数据；
	
	$result=$conn->query($sql);//执行之前的函数，返回字符集;
	
	$row = $result->fetch_assoc();//获取某行数据；
	
	echo $row["num"];//获取某个字段的值，这里指的是获取存在这个用户名的个数
?>
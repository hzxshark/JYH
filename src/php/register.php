<?php
	$conn = new mysqli("localhost:3306", "root", "", "database1");
	#$conn->query("set names 'utf8'");//支持中文字符串--这个不知道为什么不好使唤
	header("content-type:text/html;charset=utf-8");
	$tel=$_GET["tel"];
	$pass=$_GET["pass"];
//	$ip=$_SERVER["REMOTE_ADDR"];
	
	 if(fn()==0){
	 	$sql="insert into jyhlist (tel,password)values('$tel','$pass')";
	 	$conn->query($sql);
	 	echo "1";
	 }else{
	 	echo "0";
	 }
	 //判断user存不存在
	function fn(){
		$sql="select count(*) as num from jyhlist where tel='".$GLOBALS["tel"]."'";//查询有几个同名的数据；//函数里面获取不到值，所以要用全局变量
		
		$result=$GLOBALS["conn"]->query($sql);//执行之前的函数，返回字符集;
		
		$row = $result->fetch_assoc();//获取某行数据；
		
		return $row["num"];//获取某个字段的值，这里指的是获取存在这个用户名的个数
	} 	 
?>



<?php
	$conn=new mysqli("localhost:3306", "root", "","database1");
	header("content-type:html/text;charset=utf-8");
	$tel=$_GET["tel"];
	$pass=$_GET["pass"];
	//使用and来查询符合多个条件的数据
	$sql="select count(*) as num0 from jyhlist where tel='$tel'and password='$pass'";
	
	$result=$conn->query($sql);
	
	$row=$result->fetch_assoc();
	
	echo $row["num0"];	
		
?>

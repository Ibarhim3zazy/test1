<?php
	require("connector.php");
	
	$name = $_GET['name'];
	$phone = $_GET['phone'];

	$result = mysql_query("delete from mytable where name='$name' AND phone='$phone'");
	
	if ($result)
		echo "Deleted";
	else
		echo "Not Deleted";
		
?>
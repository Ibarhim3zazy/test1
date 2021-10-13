<?php
	require("connector.php");
	
	$name = $_GET['name'];
	$phone = $_GET['phone'];

	$result = mysql_query("insert into mytable values (null,'$name','$phone')");
	if ($result)
		echo "Saved";
	else
		echo "Not Saved";
?>
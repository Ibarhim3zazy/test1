<?php
	require("connector.php");
	
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$result = mysql_query("insert into mytable values (null,'$name','$phone')");
	if ($result)
		echo "Saved";
	else
		echo "Not Saved";
?>
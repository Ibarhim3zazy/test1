<?php
	require("connector.php");
	
	$id = $_POST['id'];

	$result = mysql_query("delete from mytable where id = $id");
	
	if ($result)
		echo "Deleted";
	else
		echo "Not Deleted";
		
?>
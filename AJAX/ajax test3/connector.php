<?php
	$connect=mysql_connect("localhost", "root", "");

	if (!$connect) 
		die('Could not connect: ' . mysql_error());

	if (!mysql_select_db("test")) 
		die('Could not select database: ' . mysql_error());

	mysql_query("SET NAMES 'utf8'");
?>
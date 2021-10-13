<?php
	require("connector.php");
	
	$result = mysql_query("select * from mytable order by name asc");
	
	if (mysql_num_rows($result) != 0)
	{
		echo "<table width= border=1>";
		echo "<tr align=center><td><strong>Name</strong></td><td><strong>Phone</strong></td></tr>";
		while($row = mysql_fetch_array($result))		
		{
			$name = $row['name'];
			$phone = $row['phone'];
			echo "<tr align=center><td><strong>$name</strong></td><td><strong>$phone</strong></td></tr>";
		}
		echo "</table>";
	}
	else
		echo "No data";
?>
<?php
	require("connector.php");
	
	$result = mysql_query("select * from mytable order by name asc");
	
	if (mysql_num_rows($result) != 0)
	{
		echo "<table width=600 border=1>";
		echo "<tr align=center><td width=300><strong>Name</strong></td><td width=200><strong>Phone</strong></td width=100><td></td></tr>";
		while($row = mysql_fetch_array($result))		
		{
			$name = $row['name'];
			$phone = $row['phone'];
			$id = $row['id'];
			echo "<tr align=center><td><strong>$name</strong></td><td><strong>$phone</strong></td>
					<td><a href='javascript: del($id)'>del</a></td>
				  </tr>";
		}
		echo "</table>";
	}
	else
		echo "No data";
?>
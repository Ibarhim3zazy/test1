<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Untitled Document</title>
        <script>
			function GetXmlHttpObject()
			{
				if (window.XMLHttpRequest)
					return new XMLHttpRequest();
			
				if (window.ActiveXObject)
					return new ActiveXObject("Microsoft.XMLHTTP");
			
				return null;
			}
			function getData(name)
			{
				var url="search.php?name="+name;
			
				var xmlhttp = GetXmlHttpObject();
				xmlhttp.onreadystatechange=function()
				{
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						document.getElementById("result").innerHTML=xmlhttp.responseText;
					}
				}
				xmlhttp.open("GET",url,true);
				xmlhttp.send();
			}
		</script>
    </head>
    <body>
    	<input type="text" placeholder="Search" onkeyup="getData(this.value)"/>
        <div id="result"></div>
    </body>
</html>
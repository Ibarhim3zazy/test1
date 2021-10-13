	function GetXmlHttpObject()
	{
		if (window.XMLHttpRequest)
			return new XMLHttpRequest();
	
		if (window.ActiveXObject)
			return new ActiveXObject("Microsoft.XMLHTTP");
	
		return null;
	}
function save()
{
	var name=document.getElementById("name").value;
	var phone=document.getElementById("phone").value;
	var url="save.php?name="+name+"&phone="+phone;

	var xmlhttp = GetXmlHttpObject();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			view();
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function del(id)
{
	var url="del.php?id="+id;

	var xmlhttp = GetXmlHttpObject();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			view();
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function view()
{
	var name=document.getElementById("name").value;
	var phone=document.getElementById("phone").value;
	var url="view.php?name="+name+"&phone="+phone;

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
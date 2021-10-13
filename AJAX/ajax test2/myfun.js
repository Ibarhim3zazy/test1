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
			document.getElementById("result").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function del()
{
	var name=document.getElementById("name").value;
	var phone=document.getElementById("phone").value;
	var url="del.php?name="+name+"&phone="+phone;

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
function view()
{
	var url="view.php";

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
function view1()
{
//	var name=document.getElementById("name").value;
//	var phone=document.getElementById("phone").value;
//	var url="view.php?name="+name+"&phone="+phone;\
	var url = "view.php";

	var xmlhttp = GetXmlHttpObject();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("d2").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
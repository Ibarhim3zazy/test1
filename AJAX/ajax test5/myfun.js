
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
	var url="save.php";

	var xmlhttp = GetXmlHttpObject();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			view();
		}
	}
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Connection", "close");
	xmlhttp.send("name="+name+"&phone="+phone);
}
function del(id)
{
	var url="del.php";

	var xmlhttp = GetXmlHttpObject();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			view();
		}
	}
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Connection", "close");
	xmlhttp.send("id="+id);
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

var count = 0 ;
var t ;
var timer_is_on = 0 ;

function timedCount()
{
	count = count + 1 ;
	if ( count == 10 ) // 10 minute
	{
		count = 0 ;	
		view();
	}
	t = setTimeout("timedCount()",1000);
}

function doTimer()
{
	if (!timer_is_on)
    {
	  timer_is_on=1;
	  timedCount();
  	}
}

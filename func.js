var vBrowserName = '';
var vBrowserImgURL = '';

function checkBrowser() 
{    
	if(navigator.userAgent.indexOf("Chrome") != -1 )
	{
		vBrowserName = 'Chrome';
		vBrowserImgURL = "images/Chrome-icon.png"
	}
	else if(navigator.userAgent.indexOf("Safari") != -1)
	{
		vBrowserName = 'Safari';
		vBrowserImgURL = "images/safari-icon.png"
	}
	else if(navigator.userAgent.indexOf("Firefox") != -1 )
	{
		vBrowserName = 'Firefox';
		vBrowserImgURL = "images/Firefox-icon.png"
	}
	else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true ))
	{
		vBrowserName = 'Internet Explorer';
		vBrowserImgURL = "images/Internet-Explorer-icon.png"
	}
	else
	{
		vBrowserName ='unknown';
	}
	document.getElementById("browser_img").src = vBrowserImgURL;
	document.getElementById("browser_name").innerHTML = vBrowserName;
}

var xmlhttp;

function respond() 
{
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
	{
		document.getElementById('output_div').innerHTML = xmlhttp.responseText;
	}
}

function addEmployee() 
{
	'use strict';
	
	var vFirstName = document.getElementById("first_name").value;
	var vLastName = document.getElementById("last_name").value;
	var vDepartment = document.getElementById("department").value;
  
	var vEmployee = {
		firstName: vFirstName,
		lastName: vLastName,
		dept: vDepartment
	 
	};

	var vJSONObj = JSON.stringify(vEmployee);
	console.log(vJSONObj);
	
	if (window.XMLHttpRequest) 
	{
		xmlhttp = new XMLHttpRequest();
	}
	else 
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = respond;
	xmlhttp.open("POST", "addEmployee.php", true);
	xmlhttp.send(vJSONObj);
  
	return false;
}

function init() 
{
	'use strict';
	checkBrowser();
	document.getElementById('form').onsubmit = addEmployee;
}

window.onload = init;
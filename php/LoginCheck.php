<?php

$con = mysqli_connect("127.0.0.1","root","","wildlife");

mysqli_select_db($con,"wildlife");

$user=$_REQUEST['user'];
$pwd=$_REQUEST['password'];
$typeofuser=$_REQUEST['type_of_user'];

$sql="SELECT * FROM employee";

$records=mysqli_query($con,$sql);

while($rowvalue=mysqli_fetch_array($records))
{	

	if($rowvalue['Employee_id']==$user && $rowvalue['password']==$pwd)
	{
			echo("redirecting...");
			header("refresh:2; url=../html/employee/profile.html");
			break;
	}

	else
	{
			echo('<br><br> <h1 align="center">INVALID &nbsp USERNAME &nbsp OR &nbsp PASSWORD <br><br> Enter correct details</h1>');
			header("refresh:3; url=../html/login.html");
			break;
	}
}
?>

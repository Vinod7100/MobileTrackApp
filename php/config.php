<?php
	session_start();
	//error_reporting(0);
	require_once('PHPMailer/PHPMailerAutoload.php');
	
	$site_url = "http://localhost/tracker/";
	$site_title = "Track App";
	$admin_email = "info@parssv.com";
    //$sales_email = "sales@parssv.com";
	
	$host = "localhost";
	$db_name = "trackapp";
	$db_user = "root";
	$db_pass = "";
	
	try {
		$dbh = new PDO("mysql:host=$host; dbname=$db_name", $db_user, $db_pass);
    }
	catch(PDOException $e)
    {
		//echo $e->getMessage();
    }
	
	
?>
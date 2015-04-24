<?php
	include ("sitePaths.php");

	$settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
	$user = $settings["username"];
	$pass = $settings["password"];
	$host = $settings["serverIP"];
	$db = $settings["DBname"];
	$title = $settings["title"];

	$link = new mysqli($host, $user, $pass, $db);

//	$link = mysqli_connect("localhost", "aleena", "shiner", "cms", "3306") or die("error ".
//		mysqli_connect_error($link));
	
	if($link->connect_errno > 0) {
		die('Unable to connect to ' + $title + ' database [' . $link->connect_error . ']');
	}
?>
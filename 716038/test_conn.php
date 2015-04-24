<?php
	$user = $settings["username"];
	$pass = $settings["password"];
	$host = $settings["host-ip"];
	$db = $settings["db-name"];

	$conn = @new mysqli($host, $user, $pass, $db);

	if($conn->connect_errno > 0) {
		header('Location: /716038/index.php');
	}
?>
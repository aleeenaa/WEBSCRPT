<?php
	header("Content-Type: application/json");

	include('db_connect.php');
	include('sanitise_input.php');

	$id = $_GET['id'];
	$table = $_GET['table'];

	$query = "DELETE FROM $table WHERE p_id=".$id;

	if ($link->query($query) === TRUE) {
		echo "Record successfully deleted";
	} else {
		echo "Error deleting record: " . $link->error;
	}

?>
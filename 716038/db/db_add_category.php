<?php
header("Content-Type: application/json");

include('db_connect.php');

$name = $link->real_escape_string($_POST["name"]);

$query = "INSERT INTO category (cat_name) VALUES (?)";

$stmt = $link->prepare($query);
$stmt->bind_param("s", $name);

$stmt->execute();
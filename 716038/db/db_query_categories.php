<?php

header("Content-Type: application/json");
include ("db_connect.php");

$query = "SELECT * FROM category ORDER BY cat_name";

$result = $link->query($query);

while ($object = mysqli_fetch_row($result)) {
    $jsonData[] = array(
        "cat_id" => $object[0],
        "cat_name" => $object[1]);
}

echo json_encode($jsonData);

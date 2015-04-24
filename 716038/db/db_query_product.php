<?php

header("Content-Type: application/json");
include ("db_connect.php");

$id = $_GET['id'];

$query = "SELECT * FROM product WHERE p_id=".$id;

$result = $link->query($query);

//while ($object = $result->fetch_array(MYSQLI_ASSOC)) {
while ($object = mysqli_fetch_row($result)) {
    $jsonData = array (
        "p_id" => $object[0],
        "p_name" => $object[1],
        "p_desc" => $object[2],
        "p_price" => $object[3],
        "p_quantity" => $object[4],
        "p_img_url" => $object[5],
        "cat_id" => $object[6]);
}

echo json_encode($jsonData);

//$object = mysqli_fetch_row($result);
//$sup = array("name" => $o[1], "desc" => $row[2], "cost" => $row[3], "stock" => $row[4]);

//echo json_encode($sup);
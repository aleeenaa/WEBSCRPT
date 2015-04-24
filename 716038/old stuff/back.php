<?php
/**
 * Created by PhpStorm.
 * User: barthola
 * Date: 01/04/15
 * Time: 2:38 AM
 */

$link = mysqli_connect("localhost", "aleena", "shiner", "cms", "3306") or die("error ".
mysqli_connect_error($link));

$query = "SELECT * FROM product ORDER BY p_name";

$result = $link->query($query);

//while ($object = $result->fetch_array(MYSQLI_ASSOC)) {
while ($object = mysqli_fetch_row($result)) {
    $jsonData[] = array (
        "p_id" => $object[0],
        "p_name" => $object[1],
        "p_desc" => $object[2],
        "p_price" => $object[3],
        "p_quantity" => $object[4],
        "p_img_url" => $object[6]);


}

echo json_encode($jsonData);

//$object = mysqli_fetch_row($result);
//$sup = array("name" => $o[1], "desc" => $row[2], "cost" => $row[3], "stock" => $row[4]);

//echo json_encode($sup);
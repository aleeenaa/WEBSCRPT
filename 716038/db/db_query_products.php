<?php

    header("Content-Type: application/json");
    include ("db_connect.php");

    $query = "SELECT * FROM product ORDER BY p_name";

    $result = $link->query($query);

    while ($object = mysqli_fetch_row($result)) {
        $jsonData[] = array(
            "p_id" => $object[0],
            "p_name" => $object[1],
            "p_desc" => $object[2],
            "p_price" => $object[3],
            "p_quantity" => $object[4],
            "p_img_url" => $object[5],
            "cat_id" => $object[6]);
    }

    echo json_encode($jsonData);

<?php

    header("Content-Type: application/json");
    include ("db_connect.php");

    $keyword = $_GET['keyword'];

    $query = "SELECT * FROM product WHERE (p_name like $keyword or p_desc like $keyword )";

    $result = $link->query($query);

    //while ($object = $result->fetch_array(MYSQLI_ASSOC)) {
    while ($object = mysqli_fetch_row($result)) {
        $jsonData[] = array (
            "p_id" => $object[0],
            "p_name" => $object[1],
            "p_desc" => $object[2],
            "p_price" => $object[3],
            "p_quantity" => $object[4],
            "p_img_url" => $object[5]);

    }

    echo json_encode($jsonData);
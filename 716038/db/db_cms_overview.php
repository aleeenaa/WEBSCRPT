<?php

    header("Content-Type: application/json");
    include ("db_connect.php");

    $query = "SELECT COUNT(*) numOfProducts FROM product;";
    $query .= "SELECT COUNT(*) lowStockProducts FROM product WHERE p_stock_quantity < 10;";
    $query .= "SELECT COUNT(*) noStockProducts FROM product WHERE p_stock_quantity = 0;";
    $query .= "SELECT COUNT(*) numOfCategories FROM category;";
    $jsonData = [];

    $result = $link->query($query);

        if (mysqli_multi_query($link, $query)) {
            do {
                if ($result = mysqli_store_result($link)) {
                    while ($object = mysqli_fetch_row($result)) {
                        $jsonData[] = $object[0];
                    }
                    mysqli_free_result($result);
                }
            }
            while (mysqli_next_result($link));
        }

//    $result->free_result();
//
//    $query = "SELECT COUNT(*) lowCount FROM product WHERE p_quantity < 10";
//
//    $result = $link->query($query);
//
//    while ($object = mysqli_fetch_row($result)) {
//        $jsonData["lowCount"] = $object[0];
//    }

    echo json_encode($jsonData);

//    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
//        $jsonData["products"] = $row["productNum"];
//    }
//
//    $stmt->free_result();
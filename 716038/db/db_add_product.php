<?php
    header("Content-Type: application/json");

    include('db_connect.php');

    $name = $link->real_escape_string($_POST["name"]);
    $desc = $link->real_escape_string($_POST["desc"]);
    $price = $link->real_escape_string($_POST["price"]);
    $stock = $link->real_escape_string($_POST["stock"]);

    $query = "INSERT INTO product (p_name, p_long_desc, p_price, p_stock_quantity) VALUES (?,?,?,?)";

    $stmt = $link->prepare($query);
    $stmt->bind_param("ssss", $name, $desc, $price, $stock);

    $stmt->execute();
<?php
    header("Content-Type: application/json");

    include('db_connect.php');

    $valid = true;
    // Open php stream
    $handle = fopen("php://input", "rb");

    // Get contents of stream
    $data = stream_get_contents($handle);

    // Create associative array from stream data
    $data = json_decode($data, TRUE);

    foreach ($data as $key => $value) {
        if ($key == "id") {
            $id = $link->real_escape_string(stripslashes(trim($value)));
        } else {
            $field = $link->real_escape_string(stripslashes(trim($key)));
            $val = $link->real_escape_string(stripslashes(trim($value)));
        }
    }

$query = "SELECT p_stock_quantity FROM product WHERE p_id="+$id;

$mysql_stuff = mysql_query($query, $link);

while($row = mysql_fetch_row($mysql_stuff)) {
    $server_quantity = stripslashes($row[0]);
}

if ($id !== "" && $field == "p_quantity") { //Function to subtract, update the number

    $server_quantity = $server_quantity - $val;

    $query = "UPDATE product SET p_stock_quanity ="+$server_quantity;
    $mysql_stuff = mysql_query($query, $link);
}


    if(!$stmt->execute()) {
        $valid = false;
        die("Could not update product");
    }

    // Close stream
    fclose($handle);

    if ($valid) {
        echo '{"result":"success"}';
    } else {
        echo '{"result":"failed"}';
    }

//    $name = $link->real_escape_string($_POST["name"]);
//    $desc = $link->real_escape_string($_POST["desc"]);
//    $price = $link->real_escape_string($_POST["price"]);
//    $stock = $link->real_escape_string($_POST["stock"]);
//
//    $query = "UPDATE product SET (p_name, p_long_desc, p_price, p_stock_quantity) VALUES (?,?,?,?)";
//
//    $stmt = $link->prepare($query);
//    $stmt->bind_param("ssss", $name, $desc, $price, $stock);
//
//    $stmt->execute();
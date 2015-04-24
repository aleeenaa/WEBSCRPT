<?php
include ("sitePaths.php");

try {
    if(isset($_POST['shopName'])) {
        $filename = INCLUDES_ROOT . 'config.ini';
        $file = fopen($filename,"w") or die('Setting up files was not possible. Try again?');

        $DBname = $_POST["DBname"];
        $server = $_POST["serverIP"];
        $user = $_POST["serverUsername"];
        $pass = $_POST["serverPassword"];

        $shopName = $_POST['shopName'];

        $string = 'title = "' . $shopName . '"
        serverIP = "' . $server . '"
        DBname = "' . $DBname . '"
        username = "' . $user . '"
        password = "' . $pass . '"';

        fwrite($file, $string);
        fclose($file);
    }

    $link = new mysqli($server, $user, $pass);

    $sql = "CREATE DATABASE IF NOT EXISTS " . $DBname . "; USE " . $DBname . "; ";
    $sql .= file_get_contents(DB_ROOT . "createDB.sql");

    if(!$link->multi_query($sql))
    {
        die("Couldn't create database");
    }
    $link->close();

    header('Location: /716038/db/insertSampleData.php');
    exit;
}
catch (Exception $ex)
{
    header('Location: /716038/install.php');
    exit;
}
?>
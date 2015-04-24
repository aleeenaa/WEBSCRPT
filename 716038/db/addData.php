<?php
include ("sitePaths.php");
include (DB_ROOT . "db_connect.php");

try {
    if(isset($_POST['sampleData'])) {
        $data = file_get_contents(DB_ROOT . "sampleData.sql");

        $link->multi_query($data);
        $link->close();

        header('Location: /716038/cms');
    } else {
        header('Location: /716038/cms');
    }
} catch(Exception $ex) {
    echo $ex;
}
?>
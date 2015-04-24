<?php

    include ("sitePaths.php");
    $settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
    include ("test_conn.php");
    include (INCLUDES_ROOT . "header.php");
    //include ("cmsNav.php");

?>

    <div class='rightContent'>
        <section id="products"></section>
    </div>

<?php

    include (INCLUDES_ROOT . "footer.php");
?>
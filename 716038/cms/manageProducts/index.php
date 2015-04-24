<?php

include ("sitePaths.php");
$settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
include (SITE_ROOT . 'test_conn.php');
include (INCLUDES_ROOT . 'header.php');

?>

<div>
    <section id="manage-products-content">
    </section>
</div>

<?php

include ( INCLUDES_ROOT . "footer.php");

?>

<?php

include ("sitePaths.php");
$settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
include (SITE_ROOT . 'test_conn.php');
include (INCLUDES_ROOT . 'header.php');

?>

    <div>
        <section id="edit-product-content">
            <div class="stealth" id="tableStatus">
                <p id="tableMsg" class="status error tableValid"></p>
            </div>
            <div class="hint">
                Click on fields to edit
            </div>
        </section>
    </div>

<?php

include ( INCLUDES_ROOT . "footer.php");

?>
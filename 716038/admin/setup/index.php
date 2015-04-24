<?php

include ("sitePaths.php");
$settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
include (SITE_ROOT . "test_conn.php");
include (INCLUDES_ROOT . 'header.php');

?>
    <div class="admin-content">
        <section>
            <h2>Reset Website</h2>
            <div class="adminReset" id="adminReset">
                <h3>Would you like to reset the website?</h3>
                <p>NOTE: This will delete any changes made to the database unless a new one is created.</p>
                <div id="resetWebsite">Reset Website</div>
            </div>
        </section>
    </div>
<?php

include (INCLUDES_ROOT . "footer.php");

?>
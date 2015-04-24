<?php

include ("sitePaths.php");
$settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
include (SITE_ROOT . "test_conn.php");
include (INCLUDES_ROOT . 'header.php');

?>
    <div class="cms-content">
        <section>
            <h2>Content Management</h2>
            <div class="cmsOverview" id="cmsOverview">
                <h3>Overview</h3>
                <p id="cmsOverviewText"></p>
            </div>
        </section>
    </div>
<?php

include (INCLUDES_ROOT . "footer.php");

?>
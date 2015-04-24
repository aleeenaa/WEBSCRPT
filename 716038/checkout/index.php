<?php

    include ("sitePaths.php");
    $settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
    include (SITE_ROOT . "test_conn.php");
    include (INCLUDES_ROOT . 'header.php');

?>

<div id="checkout-content">
    <section>
        <form id="customer-info-content"></form>
        <div id="basketContent">
            <div id="totalSpan" class="basketTotal stealth">Sub-total: <span id="basketTotal">£0.00</span></div>
        </div>

    </section>
</div>

<?php

    include ( INCLUDES_ROOT . "footer.php");

?>

<?php

    include ("sitePaths.php");
    $settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
    include (SITE_ROOT . "test_conn.php");
    include (INCLUDES_ROOT . 'header.php');

?>

<section id="main-content">

    <div id="top-content">
        <div class="stealth" id="deletedFromBasket"><p class="">Item deleted from Basket</p></div>
        <div id="goShoppingTop" class="pull-left"><img src="/716038/img/backbutton.png" alt="Back to Shop" style="width:6em;height:42px;border:0"></div>
        <div id="goToCheckoutTop" class="pull-right"><img src="/716038/img/checkout.png" alt="Go To Checkout"
                                                          style="width:8em;height:42px;border:0"></div>
    </div>

    <div id="basket-content">
        <div class="basketFields">
            <div class="nameField">Items</div>
            <div class="quantityField">Quantity</div>
            <div class="priceField">Price (£ per product)</div>
            <div class="actionField">Action</div>
        </div>
        <div id="basketContent" class="basketContent"></div>
        <div class="basketTotal">Sub-total: <span id="basketTotal">£0.00</span></div>
    </div>

    <div id="bottom-content">
        <div id="goShoppingBottom" class="pull-left"><img src="/716038/img/backbutton.png" alt="Back to Shop" style="width:6em;height:42px;border:0"></div>
        <div id="goToCheckoutBottom" class="pull-right"><img src="/716038/img/checkout.png" alt="Go To Checkout"
                                                             style="width:8em;height:42px;border:0"></div>
    </div>

</section>

<?php

    include (INCLUDES_ROOT . 'footer.php');

?>
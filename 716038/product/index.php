<?php

    include ("sitePaths.php");
    $settings = parse_ini_file(INCLUDES_ROOT . "config.ini");
    include (SITE_ROOT . "test_conn.php");
    include (INCLUDES_ROOT . 'header.php');
?>

<!--    <div class="left-content">-->
<!--        <div class="navDiv">-->
<!--            <a href="../" class="toOther navButton">Back to Shop</a>-->
<!--        </div>-->
<!--    </div>-->
    <div class="product">
        <div class="stealth" id="addedToBasket"><p class="">Item added to basket</p></div>
        <div class="stealth error" id="quantityMsg"><p class="">Can't add any more of this item to your basket</p></div>
        <div class="productData" id="productContainer">
            <h2 id="productName">Product Information</h2>
            <div class="" id="productImage"></div>
            <div class="productDescDiv" id="productDescriptionContainer"></div>
        </div>
        <div id="goShopping"><img src="/716038/img/backbutton.png" alt="Back to Shop" style="width:6em;height:42px;
        border:0"></div>

<?php

include (INCLUDES_ROOT . "footer.php");

?>
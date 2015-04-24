<?php

    $title = $settings['title'];
    $dirPath = explode("/", $_SERVER['PHP_SELF']);
    $page = strtolower($dirPath[count($dirPath)-2]);
    $section = isset($dirPath[count($dirPath)-3]) == TRUE ? strtolower($dirPath[count($dirPath)-3]) : 'Home';
    $shop = false;
    $cms = false;
    $admin = false;

    switch ($page) {
        case "716038":
            $shop = true;
            $title .= " - Home";
            break;
        case "cms":
            $cms = true;
            $title .= " - CMS";
            break;
        case "admin":
            $title .= " - Admin";
            $admin = true;
            break;
        case "addcategory":
            $cms = true;
            $title .= " - Add Category";
            break;
        case "addproduct":
            $cms = true;
            $title .= " - Add Product";
            break;
        case "managecategories":
            $cms = true;
            $title .= " - Manage Categories";
            break;
        case "manageproducts":
            $cms = true;
            $title .= " - Manage Products";
            break;
        case "product":
            $shop = true;
            $title .= " - ";
            break;
        case "basket":
            $shop = true;
            $title .= " - My Basket";
            break;
        case "checkout":
            $shop = true;
            $title .= " - Checkout";
            break;
        case "setup":
            $title .= " - Setup";
            $admin = true;
            break;
        default:
            break;

    }

if(isset($page)) {

?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="description" content="WEBSCRP - Shop CMS">
    <meta name="author" content="Aleena Naeem">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0">
    <link rel="icon" type="image/ico" href="/716038/favicon.ico" />
    <link rel="apple-touch-icon" href="/716038/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/716038/css/stylesheet.css" />

    <script type="text/javascript" src="/716038/js/checkLocalStorage.js"></script>
    <script type="text/javascript" src="/716038/js/searchBar.js"></script>
    <script type="text/javascript" src="/716038/js/ajax.js"></script>

    <?php if ($shop && $page == "716038") { ?>
        <script type="text/javascript" src="/716038/js/js.js"></script>
    <?php }

    if ($page == "product") { ?>
        <script type="text/javascript" src="/716038/js/pp.js"></script>
    <?php }

    if ($page == "basket") { ?>
        <script type="text/javascript" src="/716038/js/basket.js"></script>
    <?php }

    if ($page == "checkout") { ?>
    <script type="text/javascript" src="/716038/js/checkout.js"></script>
    <?php }

    if ($page == "admin") { ?>
    <script type="text/javascript" src="/716038/js/admin.js"></script>
    <?php }

    if ($page == "cms" || $section == "cms") { ?>
    <script type="text/javascript" src="/716038/js/cms.js"></script>
    <?php } }?>

    <title><?php echo $title ?></title>

</head>

<body>

    <?php

    include ("navBar.php");
    ?>
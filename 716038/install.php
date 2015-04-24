<?php $settings = parse_ini_file('includes' . DIRECTORY_SEPARATOR . 'config.php'); ?>

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

    <title>Install Shop</title>
</head>
<body>
    <section>
        <section>
            <h2>Install Shop</h2>
            <h3>Setup Configuration</h3>
            <p class="important">No database detected. Please fill in the fields below to set up your shop and install the database.</p>
        </section>
        <form method="POST" action="/716038/admin/setup/confirmSettings.php" id="site-settings" class="siteSettings">
            <fieldset>
                <h3>Shop Details</h3>
                <div class="stealth" id="shopNameMsg"><p class="status error validateMsg"></p></div>
                <div class="formGroup">
                    <label for="shopName">Shop Name:</label>
                    <input type="text" name="shopName" id="shopName" data-pat="Letters and Numbers"
                           pattern="^[a-zA-Z'.,- ]{0,150}$" required>
                </div>
            </fieldset>
            <fieldset id="database">
                <h3>Database</h3>
                <div class="formGroup">
                    <label for="serverIP">Server IP:</label>
                    <input type="text" name="serverIP" id="serverIP" value="127.0.0.1"
                           pattern="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$" placeholder="Server IP" required>
                </div>
                <div class="formGroup">
                    <label for="DBname">Name of Database:</label>
                    <input type="text" name="DBname" id="DBname" placeholder="Database Name">
                </div>
                <div class="formGroup">
                    <label for="serverUsername">Username:</label>
                    <input type="text" name="serverUsername" id="serverUsername" value="root" placeholder="Username"
                           required>
                </div>
                <div class="formGroup">
                    <label for="serverPassword">Password:</label>
                    <input type="password" name="serverPassword" id="serverPassword" placeholder="Password" value="">
                </div>
            </fieldset>
            <input id="installSubmit" type="submit" value="Submit">
        </form>
    </section>
</body>
</html>

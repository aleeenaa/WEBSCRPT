<?php $settings = parse_ini_file('incl' . DIRECTORY_SEPARATOR . 'config.php'); ?>

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
    <script>
        checkLocalStorage();
    </script>
    <section>
        <section>
            <h2>Install Shop</h2>
            <h3>Populate Database</h3>
        </section>
        <form method="POST" action="/716038/db/addData.php" id="insertSampleData" class="insert-sample-data">
            <fieldset>
                <p class="green"><strong>Database succesfully initialised and configurations saved.</strong></p>
                <label for="sampleData">Populate database with preset data?</label>
                <input type="checkbox" id="sampleData" value="yes" name="sampleData" checked="checked" checked>
            </fieldset>
            <input id="installSubmit" type="submit" value="Submit">
        </form>
    </section>
</body>
</html>
var pageSelection = function() {

    var url = window.location.href;

    if (url.indexOf("/716038/") !== -1) {
        var page = url.split("/716038/");
        console.log(page);
    }

    switch (page[1]) {
        case "admin/setup/" :
            addEventListeners();
            break;
        default :
            break;
    }
};

var addEventListeners = function () {
    document.getElementById("resetWebsite").addEventListener("click", function() {
        window.location.href = "../install.php";
    }, true);
};

window.addEventListener("load", pageSelection, true);
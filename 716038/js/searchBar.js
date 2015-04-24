
var searchForProducts = function(keyword) {

    console.log("Keyword grabbed.");

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_search_products.php?keyword="+keyword);
    xhr.addEventListener("load", returnProducts);
    xhr.send();

};

//var addEventListeners = function () {
//
//    document.querySelector("#searchBar").addEventListener('keyup', function (event) {
//            console.log("It's Fired!");
//            if (event.target.className == "searchBarInput") {
//                console.log("Grabbing keyword.");
//                var keyword = document.getElementById("searchInput").value;
//                console.log(keyword);
//                console.log("Is keyword blank?");
//                if (keyword !== "") {
//                    console.log("NO. Grabbing keyword ..");
//                    searchForProducts(keyword);
//                } else {
//                    console.log("YES. Search not initiated.");
//                }
//            }
//        }, true)
//};
//
//window.addEventListener("keyup", addEventListeners);
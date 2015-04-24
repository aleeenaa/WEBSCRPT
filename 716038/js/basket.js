
function showBasket() {

    var container = document.getElementById("basketContent");
    container.innerHTML = "";
    var emptyMsg =  "<p class='emptyMsg'>Your basket is empty.</p>";

    console.log("Checking if basket Exists");
    if (localStorage.getItem("basket")) {
        console.log("Yes it exists. Checking if basket Empty...");
        if ((localStorage.getItem("basket")) == "[]") {
            console.log("Empty Basket");
            container.innerHTML= emptyMsg;
        } else {
            console.log("Getting Basket");
            getBasket();
            console.log("Basket returned successfully");
        }
    } else {
        console.log("Basket does not Exist");
        console.log("Creating a new basket.");
        localStorage.setItem("basket", "[]");
    }
    checkBasket();
}

var getBasket = function() {

    var container = document.getElementById("basketContent");
    var basket = JSON.parse(localStorage.getItem("basket"));
    var total = document.getElementById("basketTotal");

        for (var item in basket) {

            if (basket.hasOwnProperty(item)) {

                var row = document.createElement("div");
                row.id = "product" + basket[item].id;
                row.className = "productRowBasket";

                var productName = document.createElement("div");
                productName.id = "product" + basket[item].id + "name";
                productName.className = "productRowNameLink";

                var name = document.createElement("a");
                name.id = "nameLink" + basket[item].id;
                name.className = "nameLink";
                name.innerHTML = basket[item].name;
                name.href = "../product/index.php?id=" + basket[item].id;

                var productQuantity = document.createElement("div");
                productQuantity.className = "productRowQuantity";

                var quantity = document.createElement("input");
                quantity.id = "product" + basket[item].id + "quantity";
                quantity.className = "productQuantityInput";
                quantity.value = basket[item].quantity;
                quantity.readOnly = "readonly";
                quantity.cursor = "none";

                var productPrice = document.createElement("div");
                productPrice.id = "product" + basket[item].id + "price";
                productPrice.className = "productRowPrice";
                productPrice.textContent = "£" + basket[item].cost;

                var productDelete = document.createElement("div");
                productDelete.id = basket[item].id;
                productDelete.className = "productRowDelete";
                productDelete.title = "Delete Product";

                var deleteButton = document.createElement("img");
                deleteButton.src = "/716038/img/deletefrombasket.png";
                deleteButton.style = "width:42px;height:42px;border:0";

                productDelete.appendChild(deleteButton);

                productName.appendChild(name);
                productQuantity.appendChild(quantity);

                row.appendChild(productName);
                row.appendChild(productQuantity);
                row.appendChild(productPrice);
                row.appendChild(productDelete);

                container.appendChild(row);
            }
        }

        total.textContent = "£" + calculateTotal("basket");
};

//
//function crossCheck(id) {
//
//
//    xhr = new XMLHttpRequest();
//    xhr.open("GET", "/716038/db/db_query_product.php?id=" + id);
//    xhr.addEventListener("load", getBasketRow);
//    xhr.send();
//}
//
//function getBasketRow() {
//
//    var db_product = JSON.parse(xhr.responseText);
//    var db_stock = db_product.p_quantity;
//    var db_price = db_product.p_price;
//
//    var basket = JSON.parse(localStorage.getItem("basket"));
//    var container = document.getElementById("basketContent");
//
//    var bk_quantity = basket[item].quantity;
//    var bk_cost = basket[item].cost;
//
//    var row = document.createElement("div");
//    row.id = "product" + basket[item].id;
//    row.className = "productRowBasket";
//
//    var productName = document.createElement("div");
//    productName.id = "product" + basket[item].id + "name";
//    productName.className = "productRowNameLink";
//
//    var name = document.createElement("a");
//    name.id = "nameLink" + basket[item].id;
//    name.className = "nameLink";
//    name.innerHTML = basket[item].name;
//    name.href = "../product/db_query_product.php?id=" + basket[item].id;
//
//    var productQuantity = document.createElement("div");
//    productQuantity.className = "productRowQuantity";
//
//    var quantity = document.createElement("input");
//    quantity.id = "product" + basket[item].id + "quantity";
//    quantity.className = "productQuantityInput";
//
//    if (bk_quantity <= db_stock) {
//        quantity.value = bk_quantity;
//    } else if (bk_quantity > db_stock) {
//        quantity.value = db_stock;
//    }
//
//    var productPrice = document.createElement("div");
//    productPrice.id = "product" + basket[item].id + "price";
//    productPrice.className = "productRowPrice";
//    productPrice.textContent = "£";
//
//    if (bk_cost !== db_price) {
//        productPrice.value = db_price;
//    } else if (bk_cost = db_stock) {
//        quantity.value = db_stock;
//    }
//
//    var productDelete = document.createElement("div");
//    productDelete.id = "product" + basket[item].id + "delete";
//    productDelete.className = "productRowDelete";
//    productDelete.title = "Delete Product";
//    productDelete.textContent = "DELETE";
//
//    productName.appendChild(name);
//    productQuantity.appendChild(quantity);
//
//    row.appendChild(productName);
//    row.appendChild(productQuantity);
//    row.appendChild(productPrice);
//    row.appendChild(productDelete);
//
//    container.appendChild(row);
//
//}

var calculateTotal = function(key) {

    var total = 0;
    var basket = JSON.parse(localStorage.getItem(key));
    for (var item = 0; item < basket.length; item++) {
        total += (parseFloat(basket[item].cost) * parseInt(basket[item].quantity));
    }
    total = total.toFixed(2);
    return total;
};

var deleteItemFromBasket = function(id) {
    var basket = JSON.parse(localStorage.getItem("basket"));
    for (var item = 0; item < basket.length; item++) {
        if (basket.hasOwnProperty(item) && basket[item].id == id) {
            console.log("Looking at item " + (item) + " in basket..");
            console.log(basket);
            basket.splice(item,1);
            console.log(basket);
            localStorage.setItem("basket", JSON.stringify(basket));
            checkBasket();
            document.getElementById("deletedFromBasket").className = "showStatus success";
            setTimeout(function(){document.getElementById("deletedFromBasket").className = "stealth";}, 3000);
            break;
        } else {
            console.log("Item is not in your basket.")
        }
    }
    showBasket();
};
//
//var getRidOfNull = function() {
//    var updatedBasket = [];
//    var basket = JSON.parse(localStorage.getItem("basket"));
//    for (var item in basket) {
//        if (basket.hasOwnProperty(item)) {
//            console.log(basket);
//            if (JSON.stringify(basket[item]) !== "null") {
//                updatedBasket += basket[item];
//                console.log(updatedBasket);
//                console.log(JSON.stringify(updatedBasket));
//            }
//        }
//    }
    //localStorage.setItem("basket", JSON.stringify(array));
//};

function addEventListeners() {

    document.getElementById("goShoppingTop").addEventListener("click", function (event) {
        window.location.href = "../";
    }, true);

    document.getElementById("goShoppingBottom").addEventListener("click", function (event) {
        window.location.href = "../";
    }, true);
    document.getElementById("goToCheckoutTop").addEventListener("click", function (event) {
        window.location.href = "../checkout/";
    }, true);
    document.getElementById("goToCheckoutBottom").addEventListener("click", function (event) {
        window.location.href = "../checkout/";
    }, true);

    document.querySelector("#bottom-content").addEventListener("click", function (event) {
        console.log("It's Fired!");
        if (event.target.className == "goShopping") {
            console.log("It's matched a class name!");
            window.location.href = "../";
        } else if (event.target.className == "goToCheckout") {
            console.log("It's matched a class name!");
            window.location.href = "../checkout/checkout.php";
        }
    }, false);

    document.getElementById("clearBasket").addEventListener("click", function(){
        clearBasket();
        showBasket();
    }, true);

    document.querySelector("#basketContent").addEventListener("click", function(event) {
        console.log("It's Fired!");
        if (event.target.className == "productRowDelete") {
            console.log("It's matched a class name!");
            //var id = document.getElementById("name-"+event.target.id).innerHTML;
            deleteItemFromBasket(event.target.id);
        }
    })
}

window.addEventListener("load", checkBasket);
window.addEventListener("load", checkLocalStorage);
window.addEventListener("load", showBasket, true);
window.addEventListener("load", addEventListeners);
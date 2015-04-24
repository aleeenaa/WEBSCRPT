
var getAllProducts = function(){

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_query_products.php");
    xhr.addEventListener("load", returnProducts);
    xhr.send();

};

var returnProducts = function () {

    console.log("Getting Products...");

        var products = JSON.parse(xhr.responseText);

        var dynamicContent = document.getElementById("products");
        dynamicContent.innerHTML = "";
        //var viewButton = getIcon("view");

        if (JSON.stringify(products) == "[]") {
            dynamicContent.innerHTML = "<div id='noProducts'><strong>No products</strong></div><a name='goBack' id='goBack'>Go Back</a>";
        } else {
            for (var obj in products) {
                if (products.hasOwnProperty(obj)) {

                    var container = document.createElement("div");
                    container.tabindex = 0;
                    container.className = "productItem";
                    container.id = "productItem" + products[obj].p_id;
                    container.draggable = true;

                    var name = document.createElement("p");
                    name.className = "productName";
                    name.id = "name-" + products[obj].p_id;
                    name.innerText = products[obj].p_name;

                    var img = document.createElement("img");
                    img.src = "img/products/" + products[obj].p_id + "/" + products[obj].p_img_url;
                    img.title = products[obj].p_name;
                    img.alt = "Image of " + products[obj].p_name;
                    img.className = "productImg";
                    img.draggable = false;

                    var price = document.createElement("p");
                    price.className = "productPrice";
                    price.innerText = "Price: ";

                    var priceText = document.createElement("strong");
                    priceText.id = "price-" + products[obj].p_id;
                    if (parseFloat(products[obj].p_price) > 100000) {
                        priceValue = "See Details";
                    } else {
                        priceValue = "£" + products[obj].p_price;
                    }

                    if (!document.all) {
                        price.textContent = "Price: ";
                        priceText.textContent = priceValue;
                    }

                    var quantityValue;
                    if (parseInt(products[obj].p_quantity) > 0 && parseInt(products[obj].p_quantity) < 100) {
                        quantityValue = "<strong>" + products[obj].p_quantity + "</strong> in stock";
                    } else if (parseInt(products[obj].p_quantity) >= 100) {
                        quantityValue = "<strong>In Stock</strong>";
                    } else {
                        quantityValue = "<strong class='stockOut'>Out of stock</strong>";
                    }

                    var quantity = document.createElement("p");
                    quantity.className = "itemQuantity";
                    quantity.innerHTML = quantityValue;

                    var exDetail = document.createElement("div");
                    exDetail.className = "extraDetail";
                    exDetail.innerHTML = "<h1>Description:</h1>";

                    var description = document.createElement("p");
                    description.className = "descText";
                    description.innerText = products[obj].p_desc;
                    description.id = "productDesc" + products[obj].p_name;

                    exDetail.appendChild(description);

                    if (!document.all) {
                        name.textContent = products[obj].p_name;
                        description.textContent = products[obj].p_desc;
                    }

                    var buttons = document.createElement("div");
                    buttons.className = "productButtons";
                    buttons.id = "product" + products[obj].p_id + "Button";

                    var view = document.createElement("a");
                    view.className = "viewItemButton";
                    view.href = "/716038/product/index.php?id=" + products[obj].p_id;
                    view.draggable = false;
                    view.innerHTML = /*viewButton + */"<span class='viewSpan'>View Item</span>";
                    view.title = "View product detail";

                    if (priceText !== "See Details") {

                        var addToBasket = document.createElement("img");
                        addToBasket.className = "addToBasketButton";
                        addToBasket.id = products[obj].p_id;
                        addToBasket.draggable = false;
                        addToBasket.src = "img/addtobasket.png";
                        addToBasket.title = "Add item to cart";
                        addToBasket.style = "width:42px;height:42px;border:0";

                        buttons.appendChild(addToBasket);
                    }

                    price.appendChild(priceText);

                    buttons.appendChild(view);

                    container.appendChild(name);
                    container.appendChild(img);
                    container.appendChild(description);
                    container.appendChild(price);
                    container.appendChild(quantity);
                    container.appendChild(buttons);

                    dynamicContent.appendChild(container);

                }
            }

        }

        console.log("All Products returned successfully.");
};

var addToBasket = function(id, name, cost, quantity){
    //There's already a basket item.
    if (localStorage.getItem("basket")){
        // Get the current basket out of local storage.
        var curBasket = JSON.parse(localStorage.getItem("basket"));
        console.log("Basket Already Exists");
        console.log("Current Basket" + JSON.stringify(curBasket));
        if (curBasket.length > 0) {
            console.log("There are items in the basket.");
            if (itemInBasket(id) == true) {
                console.log("Item already in basket.");
                for (var item = 0; item < curBasket.length; item++) {
                    if (curBasket[item]['id'] == id) {
                        curBasket[item].quantity += quantity;
                        console.log("Quantity increased by "+ quantity);
                    }
                }
            } else {
                // *Push* a new product to the basket
                curBasket.push({id: id, name: name, cost: cost, quantity: quantity});
            }
        } else {
            // *Push* a new product to the basket
            curBasket.push({id: id, name: name, cost: cost, quantity: quantity});
        }
        // Delete the old basket
        localStorage.removeItem("basket");
        // Add the new one. Important to JSON encode it.. LocalStorage can't store objects.
        localStorage.setItem("basket", JSON.stringify(curBasket));
        console.log("Added successfully. There are now "+JSON.parse(localStorage.getItem("basket")).length+" different items.");
        document.getElementById("basketStatus").innerHTML = JSON.parse(localStorage.getItem("basket")).length;
    } else {
        // There is no basket item
        console.log("Basket Does Not Exist");
        console.log("New Basket Created");
        var basket = [];
        basket.push({id: id, name: name, cost: cost, quantity: quantity});
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log("Added successfully!!! There are now "+ JSON.parse(localStorage.getItem("basket")).length +" different items.");
    }
    checkBasket();
};

var addEventListeners = function() {

    document.querySelector("#products").addEventListener(
        'click', function (event) {
            console.log("It's Fired!");
            if (event.target.className == "addToBasketButton") {
                console.log("It's matched a class name!");
                // I've added id's to the price and name elements, with the title hyphen id respectively.
                // Take a look above.
                var name = document.getElementById("name-"+event.target.id).innerHTML;
                //Substring to remove £ sign so you can easily add prices.
                var cost = document.getElementById("price-"+event.target.id).innerHTML.substring(1);
                var quantity = 1;
                console.log(event.target.id, name, cost, quantity);
                addToBasket(event.target.id, name, cost, quantity);
            }
        }, false);

    var searchBar = document.getElementById("searchInput");
    var keyword = searchBar.value;
    searchBar.addEventListener("onkeyup", function () {
        console("Typing detected");

        if (keyword !== "") {

            console.log("Initiated");
            xhr = new XMLHttpRequest();
            xhr.open("GET", "/716038/db/db_search_products.php?keyword=" + keyword);
            xhr.addEventListener("load", returnProducts);
            xhr.send()
        }
    }, false);

    document.getElementById("clearBasket").addEventListener("click", clearBasket);
};

window.addEventListener("load", checkBasket);
window.addEventListener("load", checkLocalStorage);
window.addEventListener("load", getAllProducts);
window.addEventListener("load", addEventListeners);
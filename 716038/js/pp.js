var setupProductData = function() {
    var url = window.location.href;
    var id;

    if (url.indexOf("?id=") !== -1) {
        id = url.split("?id=");
        id = id[1];
        if (isNaN(id)) {
            showLostPage();
        }
        else
        {
            getProductDetails(id);
        }
    } else {
        showLostPage();
    }


};

// XHR Request
var getProductDetails = function(id){

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_query_product.php?id="+id);
    xhr.addEventListener("load", displayProduct);
    xhr.send();
};

var displayProduct = function() {

    var product = JSON.parse(xhr.responseText);
    console.log(product);
    //var viewButton = getIcon("view");

    if (JSON.stringify(product) == "null") {
        showLostPage();
    } else {

        document.title += " " + product.p_name;

        var container = document.getElementById("productContainer");
        var descContainer = document.getElementById("productDescriptionContainer");
        var image = document.getElementById("productImage");

        var mainInfo = document.createElement("div");
        mainInfo.className = "productMainInfo";

        var productImage = document.createElement("img");
        productImage.id = "product" + product.p_id + "Image";
        productImage.className = "productImg";
        productImage.src = "/716038/img/products/" + product.p_id + "/" + product.p_img_url;

        image.appendChild(productImage);

        var productDetail = document.createElement("div");
        productDetail.className = "productDetailDiv";

        var productName = document.createElement("p");
        productName.className = "productDetailName";
        productName.id = "name-" + product.p_id;
        productName.textContent = product.p_name;
        
        var productPrice = document.createElement("p");
        productPrice.className = "productPrice";

        var priceText = document.createElement("strong");
        priceText.id = "price-" + product.p_id;
        priceText.innerHTML = "£" + product.p_price;

        var productQuantity = document.createElement("p");
        productQuantity.className = "productQuantity";

        var qText = getQText(product.p_quantity);

        productPrice.appendChild(priceText);
        productQuantity.innerHTML = qText;

        productDetail.appendChild(productName);
        productDetail.appendChild(productPrice);
        productDetail.appendChild(productQuantity);

        var descHead = document.createElement("h3");
        descHead.id = "productDescHead";
        descHead.innerHTML = "Product Description";

        var productDesc = document.createElement("p");
        productDesc.className = "productDesc";
        productDesc.textContent = product.p_desc;

        descContainer.appendChild(descHead);
        descContainer.appendChild(productDesc);

        mainInfo.appendChild(productDetail);
        mainInfo.appendChild(descContainer);

        container.appendChild(mainInfo);

        var addContainer = document.createElement("div");
        addContainer.className = "addContainer";
        addContainer.id = "product" + product.p_id + "Buttons";

        var quantityLabel = document.createElement("label");
        quantityLabel.className = "qLabel";
        quantityLabel.htmlFor = "quantityToAdd";
        quantityLabel.textContent = "Quantity: ";

        var quantity = document.createElement("select");
        quantity.className = "addQuantity";
        quantity.id = "quantityToAdd";

        if (product.p_quantity < 1) {
            quantity.disabled = true;
        }

        for (var i = 1; i < product.p_quantity + 1; i++) {
            if (i > 50) {
                break;
            }
            var option = document.createElement("option");
            option.value = i;
            option.text = i;

            quantity.appendChild(option);
        }

        addContainer.appendChild(quantityLabel);
        addContainer.appendChild(quantity);

        var addButton = document.createElement("img");
        addButton.className = "addToBasketButton";
        addButton.id = product.p_id;
        addButton.title = "Add to Basket";
        addButton.src = "/716038/img/addtobasket.png";
        addButton.title = "Add item to cart";
        addButton.style = "width:42px;height:42px;border:0";

        addContainer.appendChild(addButton);

        container.appendChild(addContainer);
    }
};

function getQText(quantity) {
    var qText;
    if (quantity < 1) {
        qText = "<strong class='boldred'>Currently out of stock.</strong>";
    } else if (quantity < 10) {
        qText = "<em class='red'>Only <strong>" + quantity + "</strong> left in stock.</em>";
    } else {
        qText = "<strong class='boldgreen'>In stock.</strong>";
    }
    return qText;
}

function showLostPage() {
    var container = document.getElementById("productContainer");
    var title = document.getElementById("productName");
    title.textContent = "Lost?";
    container.innerHTML = "<p>Seems you may have reached this page by mistake or the item you are looking for no longer exists.</p>";
    container.innerHTML += "<p>Why not <a href='../'>go back</a> to the main shop and search for it.</p>";

    document.title += " Lost?";
}

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
                        var basketQuantity = parseInt(curBasket[item].quantity);
                        basketQuantity += quantity;
                        curBasket[item].quantity = basketQuantity;
                        console.log("Quantity increased by " + quantity);
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
        console.log("Added successfully!!! There are now: "+JSON.parse(localStorage.getItem("basket")).length+" items.");
        document.getElementById("addedToBasket").className = "showStatus success";
        setTimeout(function(){document.getElementById("addedToBasket").className = "stealth";}, 3000);
    } else {
        // There is no basket item
        console.log("Basket Does Not Exist");
        console.log("New Basket Created");
        var basket = [];
        basket.push({id: id, name: name, cost: cost, quantity: quantity});
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log("Added successfully!!! There are now: "+ JSON.parse(localStorage.getItem("basket")).length +" items.");
    }
};

var itemInBasket = function(id) {
    var cart = JSON.parse(localStorage.getItem("basket"));
    console.log("Looking through basket..");
    for (var item = 0; item < cart.length; item++) {
        console.log("Looking at item " + (item) + " in basket..");
        if (cart[item].id == id) {
            console.log("Found Matching Item Already in Basket.");
            return true;
        }
    }
};

function addEventListeners() {

    document.getElementById("goShopping").addEventListener("click", function (evt) {
        window.location.href = "/716038/";
    }, false);

    document.querySelector(".productData").addEventListener(
        'click', function (event) {
            console.log("It's Fired!");
            if (event.target.className == "addToBasketButton") {
                console.log("It's matched a class name!");
                // I've added id's to the price and name elements, with the title hyphen id respectively.
                // Take a look above.
                var name = document.getElementById("name-"+event.target.id).innerHTML;
                //Substring to remove £ sign so you can easily add prices.
                var cost = document.getElementById("price-"+event.target.id).innerHTML.substring(1);
                var qSelectElement = document.getElementById("quantityToAdd");
                var quantity = parseInt(qSelectElement.options[qSelectElement.selectedIndex].text);
                console.log(event.target.id, name, cost, quantity);
                addToBasket(event.target.id, name, cost, quantity);
                checkBasket();
            }
        }, true);

    document.getElementById("clearBasket").addEventListener("click", clearBasket);
}

window.addEventListener("load", checkBasket);
window.addEventListener("load", checkLocalStorage);
window.addEventListener("load", setupProductData);
window.addEventListener("load", addEventListeners);
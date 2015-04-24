
function checkoutPage () {

    var form = document.getElementById("customer-info-content"),
        user = document.createElement("fieldset"),
        address = document.createElement("fieldset"),
        contact = document.createElement("fieldset");
    user.id = "userDetails";
    address.id = "addressDetails";
    contact.id = "contactDetails";

    var labelUdiv = document.createElement("div"),
        labelAdiv = document.createElement("div"),
        labelCdiv = document.createElement("div"),
        inputUdiv = document.createElement("div"),
        inputAdiv = document.createElement("div"),
        inputCdiv = document.createElement("div");

    var userLabels = ["Forename","Middle Name","Surname"],
        userArray = ["fn","mn","sn"],
        addressLabels = ["Address line 1","Address line 2","Address line 3","City","Country","Postcode"],
        addressArray = ["a1","a2","a3","city","country","zip"],
        contactLabels = ["Mobile Number","Email Address"],
        contactArray = ["mob", "email"];

    for (var i = 0; i < userArray.length; i++) {

        var labelU = document.createElement("label");
        labelU.id = userArray[i] + "Label";
        labelU.className = " formFields";
        labelU.innerHTML = userLabels[i] + ": ";
        labelU.for = userArray[i];

        var inputU = document.createElement("input");
        inputU.id = userArray[i];
        inputU.className = "formInputs";
        inputU.type = "text";
        inputU.title = userLabels[i];

        labelUdiv.appendChild(labelU);
        inputUdiv.appendChild(inputU);
    }

    for (i = 0; i < addressArray.length; i++) {

        var labelA = document.createElement("label");
        labelA.id = addressArray[i] + "Label";
        labelA.className = " formFields";
        labelA.innerHTML = addressLabels[i] + ": ";
        labelA.for = addressArray[i];

        var inputA = document.createElement("input");
        inputA.id = addressArray[i];
        inputA.className = "formInputs";
        inputA.type = "text";
        inputA.title = addressLabels[i];

        labelAdiv.appendChild(labelA);
        inputAdiv.appendChild(inputA);
    }

    for (i = 0; i < contactArray.length; i++) {

        var labelC = document.createElement("label");
        labelC.id = contactArray[i] + "Label";
        labelC.className = " formFields";
        labelC.innerHTML = contactLabels[i] + ": ";
        labelC.for = contactArray[i];

        var inputC = document.createElement("input");
        inputC.id = contactArray[i];
        inputC.className = "formInputs";
        inputC.type = "text";
        inputC.title = contactLabels[i];

        labelCdiv.appendChild(labelC);
        inputCdiv.appendChild(inputC);
    }

    var buttons = document.createElement("div"),
        goBackDiv = document.createElement("div"),
        reviewDiv = document.createElement("div");

    if (localStorage.getItem("customer") !== "{}") {

        var saveCheck = document.createElement("div");

        saveCheck.id = "saveDetails";
        saveCheck.innerHTML = "Save your details for future reference <input type='checkbox' name='Save Details' id='saveDetailsCheck'/>";
        saveCheck.title = "Continue without saving my details for future reference";
        saveCheck.style = "margin:2em;";

        buttons.appendChild(saveCheck);
    }

    buttons.id = "checkoutButtons";

    goBackDiv.id = "goBackDiv";
    goBackDiv.className = "pull-left";
    goBackDiv.title = "Go Back to Basket";

    var goBackButton = document.createElement("img");
    goBackButton.src = "/716038/img/backbutton.png";
    goBackButton.alt = "Go Back Button";
    goBackButton.style = "width:6em;height:42px;border:0;float:left;";

    goBackDiv.appendChild(goBackButton);

    reviewDiv.id = "checkoutReviewPage";
    reviewDiv.className = "pull-right";
    reviewDiv.title = "Continue To Review Page";

    var reviewButton = document.createElement("img");
    reviewButton.src = "/716038/img/checkout.png";
    reviewButton.alt = "Continue To Review Page";
    reviewButton.style = "width:8em;height:42px;border:0;float:right;";

    reviewDiv.appendChild(reviewButton);

    buttons.appendChild(goBackDiv);
    buttons.appendChild(reviewDiv);

    user.appendChild(labelUdiv);
    user.appendChild(inputUdiv);
    address.appendChild(labelAdiv);
    address.appendChild(inputAdiv);
    contact.appendChild(labelCdiv);
    contact.appendChild(inputCdiv);

    form.appendChild(user);
    form.appendChild(address);
    form.appendChild(contact);
    form.appendChild(buttons);

    autoFill();
}

var autoFill = function() {

    var fn = document.getElementById("fn"),
        mn = document.getElementById("mn"),
        sn = document.getElementById("sn"),
        a1 = document.getElementById("a1"),
        a2 = document.getElementById("a2"),
        a3 = document.getElementById("a3"),
        city = document.getElementById("city"),
        country = document.getElementById("country"),
        zip = document.getElementById("zip"),
        mob = document.getElementById("mob"),
        email = document.getElementById("email");

    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("customer")) {
            try {
                var customer = JSON.parse(localStorage.getItem("customer"));
                fn.value = (typeof(customer["fn"]) !== "undefined" ? customer["fn"] : "");
                mn.value = (typeof(customer["mn"]) !== "undefined" ? customer["mn"] : "");
                sn.value = (typeof(customer["sn"]) !== "undefined" ? customer["sn"] : "");
                a1.value = (typeof(customer["a1"]) !== "undefined" ? customer["a1"] : "");
                a2.value = (typeof(customer["a2"]) !== "undefined" ? customer["a2"] : "");
                a3.value = (typeof(customer["a3"]) !== "undefined" ? customer["a3"] : "");
                city.value = (typeof(customer["city"]) !== "undefined" ? customer["city"] : "");
                country.value = (typeof(customer["country"]) !== "undefined" ? customer["country"] : "");
                zip.value = (typeof(customer["zip"]) !== "undefined" ? customer["zip"] : "");
                mob.value = (typeof(customer["mob"]) !== "undefined" ? customer["mob"] : "");
                email.value = (typeof(customer["email"]) !== "undefined" ? customer["email"] : "");
                console.log("Customer details auto-filled from local storage successfully.")
            } catch (err) {
                localStorage.setItem("customer", "[]");
            }
        }
    } else {
        alert("No support for web storage, please upgrade your browser.");
    }
};

var getReviewInfo = function () {
    console.log("Getting customer Info");
    if (document.getElementById("saveDetailsCheck").checked == true) {
        console.log("Save details enabled.");
        addCustomerDetails();
        var customer = JSON.parse(localStorage.getItem("customer"));
        reviewDivPage(customer);
    } else {
        console.log("Save details disabled.");
        var keys = ["fn", "mn", "sn", "a1", "a2", "a3", "city", "country", "zip", "mob", "email"];
        var customerDetails = {};
        for (var i = 0; i < keys.length; i++) {
            customerDetails[keys[i]] = document.getElementById(keys[i]).value;
        }
        reviewDivPage(customerDetails);
    }
};

var reviewDivPage = function(customerDetails) {

    var reviewDiv = document.getElementById("customer-info-content");
    reviewDiv.innerHTML = "";

    var form = document.createElement("fieldset");
    var labelDiv = document.createElement("div"),
        inputDiv = document.createElement("div");

    var keys = ["fn", "mn", "sn", "a1", "a2", "a3", "city", "country", "zip", "mob", "email"],
        labels = ["Forename", "Middle Name", "Surname", "Address Line 1", "Address Line 2",
            "Address Line 3", "City", "Country", "Postcode", "Mobile Number", "Email Address"];

    console.log("Reviewing..  setting labels and inputs.");
    for (var key = 0; key < keys.length; key++) {

        var label = document.createElement("label");
        label.id = keys[key] + "Label";
        label.className = " formFields";
        label.innerHTML = labels[key] + ": ";
        label.for = keys[key];

        var input = document.createElement("input");
        input.id = keys[key];
        input.readOnly = "readonly";
        input.className = "formInputs";
        input.value = customerDetails[keys[key]];

        labelDiv.appendChild(label);
        inputDiv.appendChild(input);
    }

    form.appendChild(labelDiv);
    form.appendChild(inputDiv);
    reviewDiv.appendChild(form);

    console.log(document.getElementById("mob").value);
    console.log(document.getElementById("email").value);

    var basketContent = document.getElementById("basketContent");
    var container = document.createElement("section");
    var basket = JSON.parse(localStorage.getItem("basket"));
    var total = document.getElementById("basketTotal");
    var totalSpan = document.getElementById("totalSpan");

    var basketHeading = document.createElement("h3");
    basketHeading.innerHTML = "Basket";
    container.appendChild(basketHeading);

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

            var productPrice = document.createElement("div");
            productPrice.id = "product" + basket[item].id + "price";
            productPrice.className = "productRowPrice";
            productPrice.textContent = "£" + basket[item].cost;

            productName.appendChild(name);
            productQuantity.appendChild(quantity);

            row.appendChild(productName);
            row.appendChild(productQuantity);
            row.appendChild(productPrice);

            container.appendChild(row);
        }
    }
    totalSpan.className = "basketTotal";
    total.textContent = "£" + calculateTotal("basket");

    var goBackDiv = document.createElement("div");
    goBackDiv.id = "goBackDiv";
    goBackDiv.className = "pull-left";
    goBackDiv.title = "Go Back to Basket";
    goBackDiv.addEventListener("click", function () {
        window.history.back();
    }, false);

    var goBackButton = document.createElement("img");
    goBackButton.src = "/716038/img/backbutton.png";
    goBackButton.alt = "Go Back Button";
    goBackButton.style = "width:6em;height:42px;border:0;float:left;";

    goBackDiv.appendChild(goBackButton);

    var payDiv = document.createElement("div");
    payDiv.id = "payNowDiv";
    payDiv.className = "pull-right";
    payDiv.title = "Pay";
    payDiv.addEventListener("click", function () {
        getDeductValues(JSON.stringify(basket));
        clearBasket();
        window.location.href = "/716038/"
    }, false);

    var payButton = document.createElement("img");
    payButton.alt = "Pay";
    payButton.src = "/716038/img/paybutton.png";
    payButton.style = "width:8em;height:2em;border:0;float:right";

    payDiv.appendChild(payButton);
    container.appendChild(goBackDiv);
    container.appendChild(payDiv);

    basketContent.appendChild(container);
};

var calculateTotal = function(key) {

    var total = 0;
    var basket = JSON.parse(localStorage.getItem(key));
    for (var item = 0; item < basket.length; item++) {
        total += (parseFloat(basket[item].cost) * parseFloat(basket[item].quantity));
    }
    return total.toFixed(2);
};

var getDeductValues = function (basket) {

    var basket = JSON.parse(basket);
    for (var i = 0; i< basket.length; i++) {

        var productID = basket[i].id;
        var productPrice = basket[i].price;
        var productQuantity = basket[i].quantity;

        deductFromDB(productID, JSON.stringify(basket));
    }

};

var deductFromDB = function (id, json) {
    xhr = new XMLHttpRequest();
    xhr.open("PATCH", "/716038/db/db_update_product.php?id="+id);
    xhr.send(json);
};

addEventListeners = function() {

    document.getElementById("goBackDiv").addEventListener("click", function() {
        window.history.back();
    }, true);

    document.getElementById("checkoutReviewPage").addEventListener("click", getReviewInfo, true);

};

window.addEventListener("load", checkBasket);
window.addEventListener("load", checkLocalStorage);
window.addEventListener("load", checkoutPage);
window.addEventListener("load", addEventListeners);
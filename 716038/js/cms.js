var pageSelection = function() {

    var url = window.location.href;

    if (url.indexOf("/716038/") !== -1) {
        var page = url.split("/716038/");
        console.log(page);
    }

    switch (page[1]) {
        case "cms/" :
            getSummary();
            break;
        case "cms/addProduct/" :
            setupAddProduct();
            break;
        case "cms/manageProducts/" :
            setupManageProducts();
            addEventListeners();
            break;
        case "cms/addCategory/" :
            setupAddCategory();
            break;
        case "cms/manageCategories/" :
            setupManageCategories();
            break;
        default :
            page = url.split("?id=");
            getProduct(page[1]);
    }
};

var getSummary = function() {

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_cms_overview.php");
    xhr.addEventListener("load", showSummary);
    xhr.send();
};

var showSummary = function() {

    var summary = JSON.parse(xhr.responseText);
    var container = document.getElementById("cmsOverviewText");

    container.innerHTML = "<strong>Products</strong><ul><li><strong>" + summary[0] + "</strong> item(s) in catalogue</li><li><strong>" + summary[1] + "</strong> item(s) with low stock (<10)</li><li><strong>" + summary[2] + "</strong> item(s) out of stock</li></ul>";
    container.innerHTML += "<strong>Categories</strong><ul><li>Your shop has <strong>" + summary[3] + "</strong> departments (top level categories)</li></ul>";
};

var setupAddProduct = function () {
    console.log("function initiated");

    var section = document.getElementById("add-product-content");
    section.method = "post";
    section.action = "/716038/upload.php";
    section.enctype = "multipart/formdata";
    var form = document.createElement("fieldset");
    var labelDiv = document.createElement("div");
    var inputDiv = document.createElement("div");

    var nameLabel = document.createElement("label");
    nameLabel.id = "formFields";
    nameLabel.className = "formFields";
    nameLabel.innerHTML = "Product Name: ";
    nameLabel.for = "nameInput";

    var nameInput = document.createElement("input");
    nameInput.id = "nameInput";
    nameInput.className = "formInputs";

    var descLabel = document.createElement("label");
    descLabel.id = "descLabel";
    descLabel.className = "formFields";
    descLabel.innerHTML = "Product Description: ";
    descLabel.for = "descInput";

    var descInput = document.createElement("input");
    descInput.id = "descInput";
    descInput.className = "formInputs";

    var priceLabel = document.createElement("label");
    priceLabel.id = "priceLabel";
    priceLabel.className = "formFields";
    priceLabel.innerHTML = "Product Price: ";
    priceLabel.for = "priceInput";

    var priceInput = document.createElement("input");
    priceInput.id = "priceInput";
    priceInput.className = "formInputs";

    var stockLabel = document.createElement("label");
    stockLabel.id = "stockLabel";
    stockLabel.className = "formFields";
    stockLabel.innerHTML = "Product Quantity: ";
    stockLabel.for = 'stockInput';

    var stockInput = document.createElement("input");
    stockInput.id = "stockInput";
    stockInput.className = "formInputs";

    var imageLabel = document.createElement("label");
    imageLabel.id = "imageLabel";
    imageLabel.className = "formFields";
    imageLabel.innerHTML = "Product Image: ";
    imageLabel.for = "imageInput";

    var imageInput = document.createElement("input");
    imageInput.id = "imageUpload";
    imageInput.className = "formInputs";
    imageInput.type = "file";
    imageInput.name = "imageToUpload";

    var imageSubmitButton = document.createElement("input");
    imageSubmitButton.type = "submit";
    imageSubmitButton.value = "Upload Image";
    imageSubmitButton.name = "submit";


    var saveButton = document.createElement("div");
    saveButton.id = "addProductButton";
    saveButton.innerHTML = "Save New Product";
    saveButton.addEventListener("click", sendFormData, true);

    labelDiv.appendChild(nameLabel);
    inputDiv.appendChild(nameInput);
    labelDiv.appendChild(descLabel);
    inputDiv.appendChild(descInput);
    labelDiv.appendChild(priceLabel);
    inputDiv.appendChild(priceInput);
    labelDiv.appendChild(stockLabel);
    inputDiv.appendChild(stockInput);
    labelDiv.appendChild(imageLabel);
    inputDiv.appendChild(imageInput);
    inputDiv.appendChild(imageSubmitButton);

    form.appendChild(labelDiv);
    form.appendChild(inputDiv);
    form.appendChild(saveButton);
    section.appendChild(form);
};

var setupAddCategory = function () {

    var section = document.getElementById("add-category-content");
    var form = document.createElement("fieldset");
    var labelDiv = document.createElement("div");
    var inputDiv = document.createElement("div");

    var nameLabel = document.createElement("label");
    nameLabel.id = "formFields";
    nameLabel.className = "formFields";
    nameLabel.innerHTML = "Category Name: ";
    nameLabel.for = "nameInput";

    var nameInput = document.createElement("input");
    nameInput.id = "nameInput";
    nameInput.className = "formInputs";

    var saveButton = document.createElement("div");
    saveButton.id = "addCategoryButton";
    saveButton.innerHTML = "Save New Category";
    saveButton.addEventListener("click", sendCategoryData, true);

    labelDiv.appendChild(nameLabel);
    inputDiv.appendChild(nameInput);

    form.appendChild(labelDiv);
    form.appendChild(inputDiv);
    form.appendChild(saveButton);

    section.appendChild(form);

};

var sendFormData = function () {

    var name = document.getElementById("nameInput"),
        description = document.getElementById("descInput"),
        price = document.getElementById("priceInput"),
        stock = document.getElementById("stockInput"),
        image = document.getElementById("imageInput");

    xhr = new XMLHttpRequest();
    xhr.open("POST", "/716038/db/db_add_product.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("name=" + name.value + "&desc=" + description.value + "&price=" + price.value + "&stock=" + stock.value);

};

var sendCategoryData = function () {
    var category = document.getElementById("nameInput").value;

    xhr = new XMLHttpRequest();
    xhr.open("POST" , "/716038/db/db_add_category.php?", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("name="+category);

};

var setupManageProducts = function () {

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_query_products.php", true);
    xhr.addEventListener("load", manageProducts);
    xhr.send();
};

var setupManageCategories = function () {

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_query_categories.php", true);
    xhr.addEventListener("load", manageCategories);
    xhr.send();
};

var manageProducts = function () {

    var container = document.getElementById("manage-products-content");
    var products = JSON.parse(xhr.responseText);

    var row = document.createElement("div");
    row.id = "productColumns";
    row.className = "columnHeadings";

    var productName = document.createElement("div");
    productName.id = "productNameField";
    productName.className = "productHeading";
    productName.innerHTML = "Product Name";

    var productQuantity = document.createElement("div");
    productQuantity.id = "productQuantityField";
    productQuantity.className = "productHeading";
    productQuantity.innerHTML = "Product Stock";

    var productPrice = document.createElement("div");
    productPrice.id = "productPriceField";
    productPrice.className = "productHeading";
    productPrice.innerHTML = "Product Price (£)";

    var productDelete = document.createElement("div");
    productDelete.id = "productActionField";
    productDelete.className = "productHeading";
    productDelete.title = "Action to perform on this product";
    productDelete.textContent = "Action";

    row.appendChild(productName);
    row.appendChild(productQuantity);
    row.appendChild(productPrice);
    row.appendChild(productDelete);

    container.appendChild(row);

    for (var item in products) {

        if (products.hasOwnProperty(item)) {

            row = document.createElement("div");
            row.id = "product" + products[item].p_id;
            row.className = "productRowBasket";

            productName = document.createElement("div");
            productName.id = "product" + products[item].p_id + "name";
            productName.className = "productRowNameLink";

            var name = document.createElement("a");
            name.id = products[item].p_id;
            name.className = "nameLink";
            name.innerHTML = products[item].p_name;
            name.href = "/716038/cms/manageProducts/editProduct.php?id=" + products[item].p_id;

            productQuantity = document.createElement("div");
            productQuantity.className = "productRowQuantity";

            var quantity = document.createElement("input");
            quantity.id = "product" + products[item].p_id + "quantity";
            quantity.className = "productQuantityInput";
            quantity.value = products[item].p_quantity;
            quantity.readOnly = "readonly";

            productPrice = document.createElement("div");
            productPrice.id = "product" + products[item].p_id + "price";
            productPrice.className = "productRowPrice";
            productPrice.textContent = "£" + products[item].p_price;

            var productEdit = document.createElement("div");
            productEdit.id = products[item].p_id;
            productEdit.className = "productRowEdit";
            productEdit.title = "Edit Product";

            var editLink = document.createElement("a");
            editLink.innerHTML = "Edit Product";
            editLink.href = "/716038/cms/manageProducts/editProduct.php?id=" + products[item].p_id;

            productEdit.appendChild(editLink);

            productName.appendChild(name);
            productQuantity.appendChild(quantity);

            row.appendChild(productName);
            row.appendChild(productQuantity);
            row.appendChild(productPrice);
            row.appendChild(productEdit);

            container.appendChild(row);
        }
    }
};

var manageCategories = function () {

    var container = document.getElementById("manage-categories-content");
    var categories = JSON.parse(xhr.responseText);

    var row = document.createElement("div");
    row.id = "categoriesColumns";
    row.className = "columnHeadings";

    var categoriesName = document.createElement("div");
    categoriesName.id = "categoriesNameField";
    categoriesName.className = "categoriesHeading";
    categoriesName.innerHTML = "Category Name";

    var categoryDelete = document.createElement("div");
    categoryDelete.id = "categoriesActionField";
    categoryDelete.className = "categoriesHeading";
    categoryDelete.title = "Action to perform on this category";
    categoryDelete.innerHTML = "Action";

    row.appendChild(categoriesName);
    row.appendChild(categoryDelete);
    container.appendChild(row);

    for (var category in categories) {

        if (categories.hasOwnProperty(category)) {

            row = document.createElement("div");
            row.id = "category" + categories[category].cat_id;
            row.className = "productRowBasket";

            var categoryName = document.createElement("div");

            var categoryNameLink = document.createElement("input");
            categoryNameLink.id = categories[category].cat_id;
            categoryNameLink.className = "productRowNameLink deleteProductButton";
            categoryNameLink.innerHTML = categories[category].cat_name;
            categoryNameLink.contentEditable = true;

            var deleteButton = document.createElement("div");
            deleteButton.id = categories[category].cat_id;
            deleteButton.className = "deleteProductButton";
            deleteButton.title = "Delete Product";
            deleteButton.textContent = "DELETE";

            categoryName.appendChild(categoryNameLink);
            row.appendChild(categoryName);
            row.appendChild(deleteButton);

            container.appendChild(row);
        }
    }
};

var deleteCategory = function (table, id) {

    xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/716038/db/db_delete_row.php?id="+id+"&table="+table, true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send();
};


var getProduct = function (id) {

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/716038/db/db_query_product.php?id="+id);
    xhr.addEventListener("load", editProduct);
    xhr.send();
};

var editProduct = function () {

    var product = JSON.parse(xhr.responseText),
        labels = ["Product Name", "Product Description", "Product Price (£)", "Product Stock", "Product Image"],
        container = document.getElementById("edit-product-content"),
        table = document.createElement("table"),
        productName = document.createElement("tr"),
        productDesc = document.createElement("tr"),
        productPrice = document.createElement("tr"),
        productStock = document.createElement("tr"),
        productImage = document.createElement("tr");
    table.className = "editProductTable";
    table.id = product.p_id;

    var nameLabel = document.createElement("th");
    nameLabel.id = "nameLabel" + product.p_id;
    nameLabel.className = " formFields";
    nameLabel.innerHTML = labels[0] + ": ";

    var nameInput = document.createElement("td");
    nameInput.contentEditable = true;
    nameInput.id = "p_name";
    nameInput.className = "nameInput formInputs editableField";
    nameInput.innerHTML = product.p_name;

    var descLabel = document.createElement("th");
    descLabel.id = "descLabel" + product.p_id;
    descLabel.className = " formFields";
    descLabel.innerHTML = labels[1] + ": ";

    var descInput = document.createElement("td");
    descInput.contentEditable = true;
    descInput.id = "p_desc";
    descInput.className = "descInput formInputs editableField";
    descInput.innerHTML = product.p_desc;

    var priceLabel = document.createElement("th");
    priceLabel.id = "priceLabel" + product.p_id;
    priceLabel.className = " formFields";
    priceLabel.innerHTML = labels[2] + ": ";

    var priceInput = document.createElement("td");
    priceInput.id = "p_price";
    priceInput.contentEditable = true;
    priceInput.className = "priceInput formInputs editableField";
    priceInput.innerHTML = product.p_price;

    var stockLabel = document.createElement("th");
    stockLabel.id = "stockLabel" + product.p_id;
    stockLabel.className = " formFields";
    stockLabel.innerHTML = labels[3] + ": ";

    var stockInput = document.createElement("td");
    stockInput.contentEditable = true;
    stockInput.id = "p_quantity";
    stockInput.className = "stockInput formInputs editableField";
    stockInput.innerHTML = product.p_quantity;

    var imageLabel = document.createElement("th");
    imageLabel.id = "imageLabel" + product.p_id;
    imageLabel.className = " formFields";
    imageLabel.innerHTML = labels[4] + ": ";

    var imageInput = document.createElement("td");
    imageInput.contentEditable = true;
    imageInput.id = "imageInput" + product.p_id;
    imageInput.className = "formInputs";
    imageInput.innerHTML = product.p_img_url;

    var productDelete = document.createElement("div");
    productDelete.id = product.p_id;
    productDelete.className = "deleteProductButton";
    productDelete.title = "Delete Product";
    productDelete.textContent = "DELETE";

    productName.appendChild(nameLabel);
    productName.appendChild(nameInput);
    productDesc.appendChild(descLabel);
    productDesc.appendChild(descInput);
    productPrice.appendChild(priceLabel);
    productPrice.appendChild(priceInput);
    productStock.appendChild(stockLabel);
    productStock.appendChild(stockInput);
    productImage.appendChild(imageLabel);
    productImage.appendChild(imageInput);

    table.appendChild(productName);
    table.appendChild(productDesc);
    table.appendChild(productPrice);
    table.appendChild(productStock);
    table.appendChild(productImage);

    container.appendChild(table);
    container.appendChild(productDelete);

    editProductEventListeners();
};

var updateProduct = function (event) {
    var target = event.target,
        targetClass = target.className;

    if (targetClass.indexOf("editableField") !== -1) {
        var json = {};
        var id = target.id;
        var regEx, updateTable;

        if (targetClass.indexOf("nameInput") !== -1) {
            regEx = new RegExp("^[A-Za-z0-9]{1}[A-Za-z0-9\x20\x26\x22\x27\\.\\+\\-\\*\\/\\,\\(\\)]{0,99}$");
            json.p_name = target.textContent.trim();
        }
        else if (targetClass.indexOf("descInput") !== -1) {
            regEx = new RegExp("^[A-Za-z0-9]{1}[A-Za-z0-9\x20\x26\x22\x27\\.\\+\\-\\*\\/\\,\\(\\)]+$");
            json.p_desc = target.textContent.trim();
        }
        else if (targetClass.indexOf("priceInput") !== -1) {
            regEx = new RegExp("^[0-9]{1,20}[.]{0,1}[0-9]{0,2}$");
            json.p_price = parseFloat(target.textContent.trim());
        }
        else if (targetClass.indexOf("stockInput") !== -1) {
            regEx = new RegExp("^[0-9]{1,11}$");
            json.p_stock_quantity = parseInt(target.textContent.trim());
        }

        if (target.textContent.trim().match(regEx)) {
            console.log("Text: " + target.textContent);
            console.log("passed");
            target.style.border = "";
            document.getElementById("tableStatus").className = "stealth";
        }
        else {
            console.log("failed");
            target.style.border = "2px solid red";
            target.style.borderRadius = "2px";
            document.getElementById("tableMsg").innerHTML = "Fields with a red border contain invalid characters and have not updated";
            document.getElementById("tableStatus").className = "showStatus";
        }

        json.id = target.parentNode.parentNode.id;
        console.log(JSON.stringify(json));
        updateRequest(json);
    }
};

var updateRequest = function (json) {

    xhr = new XMLHttpRequest();
    xhr.open("PATCH", "/716038/db/db_deduct.php?id="+json.id, true);
    xhr.send(JSON.stringify(json));
};

var deleteProduct = function (table, id) {

    xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/716038/db/db_delete_row.php?id="+id+"&table="+table, true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send();
};

var addEventListeners = function() {
    document.querySelector("#manage-products-content").addEventListener("click", function (event) {
        console.log("It's Fired!");
        if (event.target.className == "nameLink" || event.target.className == "productRowEdit") {
            console.log("It's matched a class name!");
            window.location.href = "/716038/cms/manageProducts/editProduct.php?id=" + event.target.id;
            getProduct(event.target.id);
        }
    }, false);
};

var editProductEventListeners = function () {
    document.querySelector("table").addEventListener("input", function (event) {
        updateProduct(event);
    }, false);

    document.querySelector("#edit-product-content").addEventListener("click", function (event) {
        if (event.target.className == "deleteProductButton") {
            console.log("It's matched a class name!");
            deleteProduct("product", event.target.id);
        }
    }, false)
};

var editCategoryEventListeners = function () {
    document.querySelector("#manage-categories-content").addEventListener("click", function (event) {
        if (event.target.classList == "productRowNameLink deleteProductButton") {
            console.log("It's matched a class name!");
            deleteProduct("category", event.target.id);
        }
    }, false)
};

//document.querySelector("table").addEventListener("click", function(evt) { handleTableClicks(evt); }, false);
//document.querySelector("table").addEventListener("input", function(evt) { handleFormChange(evt); }, false);

window.addEventListener("load", pageSelection);
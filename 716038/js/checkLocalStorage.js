function checkBasket() {

	if (localStorage.getItem("basket")) {
		document.getElementById("basketStatus").innerHTML = calculateQuantity("basket");
		if (document.getElementById("basketTotal")) {
			document.getElementById("basketTotal").innerHTML = "£" + calculateTotal("basket");
		}
	} else {
		localStorage.setItem("basket", "[]");
		document.getElementById("basketStatus").innerHTML = 0;
		console.log("Basket Created");
	}

}

function clearBasket() {
	localStorage.removeItem("basket");
	localStorage.setItem("basket", "[]");
	console.log("Basket Cleared!");
	console.log(JSON.parse(localStorage.getItem("basket")));
	document.getElementById("basketStatus").innerHTML = "0";
	checkBasket();
}

var itemInBasket = function(id) {
	var basket = JSON.parse(localStorage.getItem("basket"));
	console.log("Looking through basket..");
	for (var item = 0; item < basket.length; item++) {
		console.log("Looking at item " + (item) + " in basket..");
		if (basket[item].id == id) {
			console.log("Found Matching Item in Basket.");
			return true;
		}
	}
};

var addCustomerDetails = function() {

	var keys = ["fn", "mn", "sn", "a1", "a2", "a3", "city", "country", "zip", "mob", "email"];
	var customer = {};

	for (var key = 0; key < keys.length; key++) {
		var name = keys[key];
		console.log(name);
		console.log(document.getElementById(name).value);
		customer[name] = document.getElementById(name).value;
	}
	console.log(customer);
	localStorage.setItem("customer", JSON.stringify(customer));
};

function calculateQuantity(key) {

	var basket = JSON.parse(localStorage.getItem(key));
	var total = 0;

	for (var item = 0; item < basket.length; item++) {
		total += parseInt(basket[item].quantity);
	}
	return total
}

function localEnabled() {
	if(typeof(Storage)!=="undefined") {
		return true;
	} else {
		alert("No support for web storage, please upgrade your browser");
		return false;
	}
}

function checkLocalStorage() {
	if (localEnabled() == true) {
		if (localStorage.length <= 0) {
			console.log("Initializing local storage items..");
			localStorage.setItem("basket", "[]");
			//localStorage.setItem("checkoutBasket", "[]");
			localStorage.setItem("customers", "{}");
		} else if (!localStorage.getItem("basket")) {
			localStorage.setItem("basket", "[]");
		} else if (!localStorage.getItem("customer")) {
			localStorage.setItem("customers", "{}");
		}
	}
}

function emptyLocalStorage() {
	if (localEnabled() == true) {
		localStorage.setItem("basket", "[]");
		localStorage.setItem("customers", "{}")
	}
}
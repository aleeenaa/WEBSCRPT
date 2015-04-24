<nav>
	<?php if ($shop && !$admin && !$cms): { ?>
	<ul class="pull-left">
		<li><a href="">Home</a></li>
		<li><a href="">About Us</a></li>
		<li><a href="/716038/">Products</a></li>
	</ul>
	<ul id="searchBar"><input id="searchInput" class="searchBarInput" type="text" autocomplete="on" maxlength="200"
							  placeholder="Type to search through our Products.." autofocus="" name="searchBar"></ul>
	<ul class="pull-right">
		<li><a href="">Delivery and Collection</a></li>
		<li><a href="/716038/basket/" >Your Basket</a></li>
		<li><a href="">Contact Us</a></li>
	</ul>
	<div id="basket">Items in Basket: <span id="basketStatus"></span><button
			id="clearBasket">Empty Basket</button></div>
	<?php } elseif ($cms): { ?>
		<ul class="pull-left">
			<li><a href="/716038/cms/" id="cmsOverview">Overview</a></li>
			<li><a href="/716038/cms/addCategory/" id="addCategory">Add Category</a></li>
			<li><a href="/716038/cms/addProduct/" id="addProduct">Add Product</a></li>
			<li><a href="/716038/cms/manageCategories/" id="manageCategories">Manage Categories</a></li>
			<li><a href="/716038/cms/manageProducts/" id="manageProducts">Manage Products</a></li>
		</ul>
		<ul class="pull-right">
			<li><a href="/716038/admin/">Admin</a></li>
			<li><a href="/716038/">Shop</a></li>
		</ul>
	<?php } elseif ($admin): { ?>
		<ul class="pull-left">
			<li><a href="/716038/admin/" id="adminOverview">Overview</a></li>
			<li><a href="/716038/admin/setup/">Website Reset</a></li>
		</ul>
		<ul class="pull-right">
			<li><a href="/716038/cms/">CMS</a></li>
			<li><a href="/716038/">Shop</a></li>
		</ul>
	<?php } endif ?>
</nav>

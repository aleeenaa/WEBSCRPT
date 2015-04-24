
	<footer>
		<?php if ($shop): {
			?>
		<ul class="pull-right">
			<li><a class="nav" href="/716038/admin/">Admin</a></li>
			<li><a class="nav" href="/716038/cms/">CMS</a></li>
		</ul>
		<?php } elseif ($cms): {
		?>
		<ul class="pull-right">
			<li><a class="nav" href="/716038/admin/">Admin</a></li>
			<li><a class="nav" href="/716038/">Shop</a></li>
		</ul>
		<?php } elseif ($admin): {
		?>
		<ul class="pull-right">
			<li><a class="nav" href="/716038/cms">CMS</a></li>
			<li><a class="nav" href="/716038/">Shop</a></li>
		</ul>
		<?php } endif; ?>
		<section id="info">
			<p>UP716038 &#169; 2015.</p>
		</section>
	</footer>
</body>

</html>
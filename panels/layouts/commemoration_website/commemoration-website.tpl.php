<?php
/**
 * @file
 * Plain layout template, simply printing the content areas in divs.
 */
?>
<div class="full-width">
	<?php print $content['full-width']; ?>
</div>
<div class="content-wrapper">
	<div class="center-wrapper">
		<?php print $content['center']; ?>
	</div>
	<div class="middle-wrapper">
		<div class="left-sidebar-wrapper">
			<?php print $content['left-sidebar']; ?>
		</div>
		<div class="right-sidebar-wrapper">
			<?php print $content['right-sidebar']; ?>
		</div>
	</div>
</div>
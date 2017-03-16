<?php

/**
 * @file
 * Defines a naked two-column layout with a subcolumn bar.
 */

// Plugin definition.
$plugin = array(
  'title' => t('Commemoration website'),
  'category' => t('portal'),
  'icon' => 'commemoration_website.png',
  'theme' => 'commemoration_website',
  'regions' => array(
  	'full-width' => t('Full Width'),
    'center' => t('Center'),
    'left-sidebar' => t('Left Sidebar'),
    'right-sidebar' => t('Right Sidebar'),
  ),
);
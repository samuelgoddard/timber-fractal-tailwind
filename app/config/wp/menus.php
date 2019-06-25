<?php

/**
 * Registers a custom Navigation Menu in the custom menu editor
 */
function skeleton_register_menus()
{
	register_nav_menu('main_menu', __('Main menu', 'skeleton'));
	register_nav_menu('top_menu', __('Top menu', 'skeleton'));
}

add_action('after_setup_theme', 'skeleton_register_menus');


// for custom menus
add_filter('nav_menu_css_class', 'normalize_wp_classes', 10, 2);

// for the page menu fallback (wp_list_pages)
add_filter('page_css_class', 'normalize_wp_classes', 10, 2);

/**
 * @param  $classes array
 * @param  $item object
 * @return array
 */
function normalize_wp_classes(array $classes, $item = null){

  // old classes to be replaced with 'active'
  $replacements = array(
    'current-menu-item',
    'current-menu-parent',
    'current-menu-ancestor',
    'current_page_item',
    'current_page_parent',
    'current_page_ancestor',
  );

  // if any of the classes above are present,
  // return an array with a single class ('active')
  return array_intersect($replacements, $classes) ? array('is--active') : array();
}

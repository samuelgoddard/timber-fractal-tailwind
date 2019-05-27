<?php

/**
 * Registers a custom Navigation Menu in the custom menu editor
 */
function skeleton_register_menus()
{
    register_nav_menu('main_menu', __('Main menu', 'skeleton'));
}

add_action('after_setup_theme', 'skeleton_register_menus');

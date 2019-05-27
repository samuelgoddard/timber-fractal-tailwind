<?php

function skeleton_register_sidebars()
{
    register_sidebar([
        'name'          => __('Main Sidebar', 'skeleton'),
        'id'            => 'main-sidebar',
        'description'   => __('Widgets in this area will be shown on all posts and pages.', 'skeleton'),
        'before_widget' => '<div class="sidebar-widget mb-4">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="font-medium border-b border-gray-300 pb-2 mb-2">',
        'after_title'   => '</h4>',
    ]);
}

add_action('widgets_init', 'skeleton_register_sidebars');

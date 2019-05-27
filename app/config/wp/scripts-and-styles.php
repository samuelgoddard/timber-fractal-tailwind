<?php

/**
 * Register scripts and styles and enqueue them
 */
function skeleton_scripts_and_styles()
{
    // Helps to prevent CSS caching
    $suffix = bc_env('MODE', 'production') === 'development' ? '?' . bc_random_string(16) : '';

    // Register styles
    wp_register_style('skeleton-styles', assets('styles.css') . $suffix, [], '', 'all');

    // Vue styles
    wp_register_style('skeleton-styles-vue', assets('scripts.css') . $suffix, [], '', 'all');

    // Register scripts
    wp_register_script('skeleton-vendor', assets('vendor.js'), [], '', true);
    wp_register_script('skeleton-scripts', assets('scripts.js') . $suffix, ['skeleton-vendor'], '', true);

    // Enqueue scripts and styles
    wp_enqueue_script('skeleton-scripts');
    wp_enqueue_script('skeleton-vendor');
    wp_enqueue_style('skeleton-styles');
    if (has_assets('scripts.css')) {
        wp_enqueue_style('skeleton-styles-vue');
    }

    // comment reply script for threaded comments
    if (is_singular() && comments_open() && (get_option('thread_comments') == 1)) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'skeleton_scripts_and_styles', 999);

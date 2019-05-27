<?php

/**
 * Login Page logo title
 *
 * @return string
 */
function skeleton_login_logo_title()
{
    return 'Skeleton';
}

add_filter('login_headertitle', 'skeleton_login_logo_title');

/**
 * Add favicon to Login Page
 */
add_action('login_head', function () {
    echo '<link rel="shortcut icon" href="' . images_path('favicon.png') . '" />';
});

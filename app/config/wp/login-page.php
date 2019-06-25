<?php

/**
 * Add favicon to Login Page
 */
add_action('login_head', function () {
    echo '<link rel="shortcut icon" href="' . images_path('favicon.png') . '" />';
});

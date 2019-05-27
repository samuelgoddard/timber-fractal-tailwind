<?php

// Register a new image size.
add_image_size('square', 400, 400, true);

/**
 * Register a new image size options to the list of selectable sizes in the Media Library
 *
 * @param $sizes
 *
 * @return array
 */
function skeleton_custom_image_sizes($sizes)
{
    return array_merge($sizes, [
        'square' => __('Square', 'skeleton'),
    ]);
}

add_filter('image_size_names_choose', 'skeleton_custom_image_sizes');

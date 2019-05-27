<?php

function get_template_messages()
{
    return [
        // 404 Page
        '404' => [
            'title'     => __('404 - Page not found.', 'skeleton'),
            'body'      => __('The page you have looked for does not exist.', 'skeleton'),
            'link_text' => __('Back to home page', 'skeleton'),
        ],

        // Article Component
        'article' => [
            'edit' => __('Edit', 'skeleton'),
        ],

        // Base Page
        'base' => [
            'no_content' => __('Sorry, no content', 'skeleton'),
        ],

        // Comment Form Page
        'comment_form' => [
            'name'                => __('Name', 'skeleton'),
            'email'               => __('Email', 'skeleton'),
            'website'             => __('Website', 'skeleton'),
            'comment'             => __('Comment', 'skeleton'),
            'comment_placeholder' => __('Enter your comment here...', 'skeleton'),
            'post_comment'        => __('Post Comment', 'skeleton'),
            'reset'               => __('Reset', 'skeleton'),
        ],

        // Comment Page
        'comment' => [
            'reply' => __('Reply', 'skeleton'),
        ],

        // Search Page
        'search' => [
            'no_results' => __('Sorry, No Results. Try your search again.', 'skeleton'),
        ],

        // Search Form Page
        'search_form' => [
            'search' => __('Search', 'skeleton'),
        ],

        // Single Password Page
        'single_password' => [
            'password' => __('Password', 'skeleton'),
            'submit'   => __('Submit', 'skeleton'),
        ],

        // Single Page
        'single' => [
            'edit'     => __('Edit', 'skeleton'),
            'comments' => __('Comments', 'skeleton'),
        ],
    ];
}

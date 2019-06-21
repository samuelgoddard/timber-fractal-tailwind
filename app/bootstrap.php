<?php

use Skeleton\Utils\Session;

// Load all composer packages
require_once __DIR__ . '/../vendor/autoload.php';

// Init Timber
$timber = new \Timber\Timber();

// Init Dotenv
$dotenv = new Dotenv\Dotenv(__DIR__ . '/..');
$dotenv->load();

// Load WordPress config files
require_once __DIR__ . '/../app/config/autoload.php';

// Init Sessions
Session::init();

add_filter('timber/loader/loader', function($loader){
	$loader->addPath(__DIR__ . "/../resources/components", "components");
	return $loader;
});

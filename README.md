## WordPress / Timber / Webpack / Fractal / Tailwind

## Features
* [Webpack](https://webpack.github.io/) for asset bundling / optimisation etc
* [Timber](https://www.upstatement.com/timber/) for Twig templating
* [Fractal](https://fractal.build/) for component based development / styleguide
* [PostCSS](https://postcss.org/) for styles, with plugins for nesting, importing and modern presents & more
* [CSSNano](https://cssnano.co) for asset minification
* [BrowserSync](https://www.browsersync.io/) interim while i get HMR working
* [Tailwind](https://tailwindcss.com/) utility first CSS framework
* [Purgecss](https://github.com/FullHuman/purgecss) for purging tailwind / built CSS
* [Webpack Manifest](webpack-manifest-plugin) Manifest Filter / Caching
* [Babel](https://babeljs.io/) compiler for ES6 Javascript
* Javascript code chunking
* [Vuejs](https://vuejs.org/) with [Vue Loader](https://github.com/vuejs/vue-loader) for single-file Vue components

## Requirements
* [Wordpress](https://wordpress.org/) >= v4.9.6
* [Composer](https://getcomposer.org/download/) >= v1.6.5
* [PHP](http://php.net/manual/en/install.php) >= v7.0
* [Yarn](https://yarnpkg.com/en/) >= v1.7.0 **or** [npm](https://www.npmjs.com/) >= v6.1.0
* [Nodejs](https://nodejs.org/en/) >= v8.11.1

## Installation
* clone this repo into your `wp-content/themes` folder
* `cd timber-fractal-tailwind`
* `composer install`
* `yarn` **or** `npm install`
* duplicate the `.env.example` file as `.env` - `cp .env.example .env`
* define your local URL in `build/config.js`
* `yarn watch` **or** `npm run watch` to run a development server, as well as a Fractal server alongside at a seperate port
* `yarn prod` **or** `npm run prod` to build for production

## Directory Structure	

```
|                                        
├── app/                                            
│   ├── config/                                     
│   │   ├── wp/                                     # Restructured / Split functions
│   │   ├── autoload.php                            # Functions splitting
│   │   └── timber.php                              # Timber global context etc
│   ├── bootstrap.php                               # Init
│   └── helpers.php                                 # Common helper functions

├── build/                                          
│   ├── config.js                                   # Custom asset path / devUrl
│   └── webpack.config.js                           # Webpack config

├── resources/                                      # Templating
│   ├── assets/                                     # Front-end assets
│   │   ├── fonts/                                  # Local fonts
│   │   ├── js/                                     # Javascripts
│   │   │   ├── design-tokens/                      # JS design tokens (WIP)
│   │   │   ├── lib/                                # Local library scripts
│   │   │   ├── polyfills/                          # Polyfilling
│   │   │   ├── store/                              # Vuex store
│   │   │   └── main.js                             
│   │   ├── images/                                 # Local theme imagery
│   │   ├── styles/                                 # Styles
│   │   │   └── main.css        
│   ├── components/                                 # Fractal / Twig Components / CSS
│   ├── docs/                                       # Fractal Documentation
│   └── views/                                      # Theme Twig files
│   │   ├── _includes/                              # Non-Fractal based twig includes
│   │   ├── _layouts/                               # Twig layouts
│   │   └── header/                                 # Theme header templates

├── README.md
├── archive.php
├── author.php
├── composer.json
├── composer.lock
├── fractal.js                                      # Fractal config (will move)
├── functions.php
├── index.php
├── package.json
├── page.php
├── postcss.config.js                               # PostCSS Config (will move)
├── search.php
├── searchform.php
├── single.php
├── style.css
├── tailwind.config.js                              # Tailwind Config (will move)
└── yarn.lock
```

module.exports = {
  /**
   * Define your assets path here. Assets path are your theme
   * path without host.
   * E.g. your theme path is http://test.dev/wp-content/themes/skeleton/
   * then your assets path is /wp-content/themes/skeleton/
   *
   * This is for Webpack that it can handle assets relative path right.
   */
  assetsPath: '/wp-content/themes/skeleton/',

  /**
   * Define here your dev server url here.
   *
   * This is for Browsersync.
   */
  devUrl: 'http://skeleton.localdev/',

  /**
   * You can whitelist selectors to stop purgecss from removing them from your CSS
   *
   * whitelist: ['random', 'yep', 'button']
   * In the example, the selectors .random, #yep, button will be left in the final CSS
   */
  whitelist: [],
  purgecss: {
    whitelist: [],
    whitelistPatterns: [
      /--/,
    ],
    cssFileExtensions: ["css", "less", "pcss", "postcss", "sass", "scss", "styl"],
    cssUserFileExtensions: ["html", "twig", "vue", ""],
  },
};

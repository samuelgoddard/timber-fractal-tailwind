const path = require("path");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");
const postcssResolver = require("postcss-import-resolver");
const cssnano = require("cssnano");
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './resources/**/*.twig',
    './resources/**/*.vue'
  ],
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
	whitelist: ["slide-fade-enter-active", "slide-fade-enter", "slide-fade-leave-active", "slide-fade-leave-to", "fade-enter-active", "fade-leave-active", "fade-enter", "fade-leave-to", "js:hidden", "js-loaded" ]
})

module.exports = {
  plugins: [
    autoprefixer(),
    postcssImport({
      resolve: postcssResolver({
        alias: {
          "@": path.resolve(__dirname, "resources/assets"),
        },
        extensions: [".css, .postcss"],
        modules: ["node_modules"],
      }),
    }),
    postcssPresetEnv({ stage: 2 }),
    tailwindcss("./tailwind.config.js"),
    cssnano({ preset: 'default' }),
    postcssNested({ unwrap: ["screen"] }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}

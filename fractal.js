'use strict';

const path = require("path");
const fs = require("fs");

const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require("@frctl/mandelbrot");
const twigAdapter = require("@samuelgoddard/twig");

const jsonfile = require("jsonfile");

const assetManifestPath = path.resolve(__dirname, "static/manifest.json");

const assetManifest = fs.existsSync(assetManifestPath)
  ? jsonfile.readFileSync(assetManifestPath)
  : {};

fractal.set('project.title', 'Boilerplate Component Library');

fractal.components.set('path', __dirname + '/resources/components');

fractal.components.set("default.collated", true);
fractal.components.set(
  "default.collator",
  (markup, item) =>
    `<!-- Start: ${item.handle} -->\n
    <div style="padding-bottom:20px">\n
        <div style="padding-bottom: 10px; color: #b7b7b7;">\n
          <code>@${item.label}</code>
        </div>\n
        ${markup}\n
    </div>\n
    <!-- End: @${item.handle} -->\n`
);

fractal.components.engine(twigAdapter({
  filters: {
    rev: (filePath) => assetManifest[filePath] || filePath,
  },
  functions: {
    isBuild: () => process.argv.includes("build"),
  },
  namespaces: {
    'components': ''
  }
}));
fractal.components.set("ext", ".twig");

fractal.docs.set('path', __dirname + '/resources/docs');

fractal.web.set('static.path', __dirname + '/static');
fractal.web.set('builder.dest', __dirname + '/styleguide');

fractal.web.theme(mandelbrot({skin: "black",format: "yaml"}));

fractal.web.set("server.sync", true);
// fractal.web.set("server.port", 3333);
fractal.web.set("server.syncOptions", {
  notify: true,
});

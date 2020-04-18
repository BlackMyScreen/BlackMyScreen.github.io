import fs from "fs";
import crypto from "crypto";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import html, { makeHtmlAttributes } from "@rollup/plugin-html";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { minify } from "html-minifier-terser";

const production = !process.env.ROLLUP_WATCH;

// TODO: possibly inline everything?
const template = async ({ attributes, files, bundle, publicPath, title }) => {
  const scripts = (files.js || [])
    .map(({ fileName, code, map }) => {
      const hash = crypto
        .createHash("sha512")
        .update(code)
        .digest("hex")
        .slice(0, 25);
      const hashedFileName = fileName.replace("[hash]", hash);
      const attrs = makeHtmlAttributes(attributes.script);
      const file = bundle[fileName];
      file.fileName = hashedFileName;
      delete bundle[fileName];
      bundle[hashedFileName] = file;

      return `<script defer src="${publicPath}${hashedFileName}"${attrs}></script>`;
    })
    .join("\n");

  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join("\n");

  console.log({ title });

  return minify(
    fs
      .readFileSync("./src/index.html")
      .toString()
      .replace("{{HTML_ATTRIBUTES}}", makeHtmlAttributes(attributes.html))
      .replace("{{HTML_LINKS}}", links)
      .replace("{{HTML_SCRIPTS}}", scripts),
    { collapseWhitespace: true, minifyCSS: true, minifyJS: true }
  );
};

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "bundle-[hash].js",
  },
  plugins: [
    del({ runOnce: true, targets: ["bundle-*", "index.html"] }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      // css: (css) => {
      //   css.write("build/bundle.css");
      // },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `.` directory and refresh the
    // browser on changes when not in production
    !production && livereload("."),

    // html({
    //   template: "./src/index.html",
    //   dest: "./build",
    //   filename: "index.html",
    //   inject: "head",
    // }),
    html({
      template,
    }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}

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
      dev: !production,
      // css: (css) => {
      //   css.write("build/bundle.css");
      // },
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    !production && serve(),

    !production && livereload("."),

    html({
      template,
    }),

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

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

const isProduction = !process.env.ROLLUP_WATCH;

// TODO: possibly inline everything?
const template = ({ isProduction }) => async ({
  attributes,
  files,
  bundle,
  publicPath,
  title,
}) => {
  const scripts = (files.js || [])
    .map(({ fileName, code }) => {
      const hash = () =>
        crypto.createHash("sha512").update(code).digest("hex").slice(0, 25);

      const newFileName = isProduction
        ? fileName.replace("[hash]", hash())
        : fileName;

      const file = bundle[fileName];
      file.fileName = newFileName;
      delete bundle[fileName];
      bundle[newFileName] = file;

      const attrs = makeHtmlAttributes(attributes.script);
      return `<script defer src="${publicPath}${newFileName}"${attrs}></script>`;
    })
    .join("\n");

  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join("\n");

  console.log({ title });

  let templateString = fs
    .readFileSync("./src/index.html")
    .toString()
    .replace("{{HTML_ATTRIBUTES}}", makeHtmlAttributes(attributes.html))
    .replace("{{HTML_LINKS}}", links)
    .replace("{{HTML_SCRIPTS}}", scripts);

  if (isProduction) {
    templateString = minify(templateString, {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    });
  }

  return templateString;
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
    isProduction &&
      del({ runOnce: false, targets: ["bundle-*", "index.html"] }),

    svelte({
      dev: !isProduction,
      // css: (css) => {
      //   css.write("build/bundle.css");
      // },
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    !isProduction && serve(),

    !isProduction && livereload("."),

    html({
      template: template({ isProduction }),
    }),

    isProduction && terser(),
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

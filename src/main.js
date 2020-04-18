import App from "./App.svelte";

new App({ target: replaceContents(document.getElementById("blackmyscreen")) });

function replaceContents(node) {
  node.innerHTML = "";
  return node;
}

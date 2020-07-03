import loadScripts from "@abcnews/hash-scripts-loader";

// Only work once Odyssey loads (due to <a name=> links)
if (window.__ODYSSEY__) {
  loadScripts(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    loadScripts(e.detail);
  });
}

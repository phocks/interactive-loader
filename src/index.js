import decodeAndLoadInteractives from "./module";

// Only work once Odyssey loads (due to <a name=> links)
if (window.__ODYSSEY__) {
  decodeAndLoadInteractives(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    decodeAndLoadInteractives(e.detail);
  });
}

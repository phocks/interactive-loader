import base36Interactives from "./module";

// Only work once Odyssey loads (due to <a name=> links)
if (window.__ODYSSEY__) {
  base36Interactives(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    base36Interactives(e.detail);
  });
}

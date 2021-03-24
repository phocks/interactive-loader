import loadScripts from "@abcnews/hash-scripts-loader";

// Only work once Odyssey loads (due to <a name=> links)
// DOESN'T REQUIRE ODYSSEY NOW PRESENTATION LAYER HANDLES
// TRANSFORMING #HASHES TO <div id=blah

// if (window.__ODYSSEY__) {
//   loadScripts(window.__ODYSSEY__);
// } else {
//   window.addEventListener("odyssey:api", e => {
//     loadScripts(e.detail);
//   });
// }

loadScripts();

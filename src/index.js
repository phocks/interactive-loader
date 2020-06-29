// Make things work in IE11
import "url-search-params-polyfill";
import * as a2o from "@abcnews/alternating-case-to-object";
import { encode, decode } from "@abcnews/base-36-props";

const params = new URLSearchParams(window.location.search);
const proxyString = params.get("proxy");

console.log("Proxy: " + proxyString);

function init() {
  const encodedHashElement = document.querySelector(
    "[name^='interactivescripts']"
  );

  const scripts = decode(a2o(encodedHashElement.getAttribute("name")).encoded);

  function loadModule(url) {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", url);
    document.head.appendChild(scriptTag);
  }

  for (const script of scripts) {
    loadModule(script);
  }
}

if (window.__ODYSSEY__) {
  init(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    init(e.detail);
  });
}

if (module.hot) {
  module.hot.accept("./", () => {
    try {
      if (window.__ODYSSEY__) {
        init(window.__ODYSSEY__);
      } else {
        window.addEventListener("odyssey:api", e => {
          init(e.detail);
        });
      }
    } catch (error) {
      console.error(error);
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[public path: ${__webpack_public_path__}`);
}

// Make things work in IE11
import "url-search-params-polyfill";

const params = new URLSearchParams(window.location.search);
const proxyString = params.get("proxy");

console.log("Proxy: " + proxyString);

function init() {
  function loadModule(url) {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", url);
    document.head.appendChild(scriptTag);
  }

  loadModule(proxyString);
}

init();

if (module.hot) {
  module.hot.accept("./", () => {
    try {
      init();
    } catch (err) {
      import("./components/ErrorBox").then(exports => {
        const ErrorBox = exports.default;
        root.appendChild(new ErrorBox({ error: err }).el);
      });
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[public path: ${__webpack_public_path__}`);
}

// Make things work in IE11
import "url-search-params-polyfill";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("proxy");

console.log(myParam);

function init() {
  // root.appendChild(new App({ projectName: PROJECT_NAME }).el);
  function loadModule(url) {
    const module = document.createElement("script");
    module.setAttribute("src", url);
    module.setAttribute("type", "module");
    document.head.appendChild(module);
  }

  loadModule(
    "https://www.abc.net.au/res/sites/news-projects/interactive-virus-treatment/master/index.js"
  );
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
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}

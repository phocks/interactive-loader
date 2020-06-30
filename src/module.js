// Make things work in IE11
import "url-search-params-polyfill";
import a2o from "@abcnews/alternating-case-to-object";
import { decode } from "@abcnews/base-36-props";

// TODO: Possibly add a proxy function
// const params = new URLSearchParams(window.location.search);
// const proxyString = params.get("proxy");
// console.log("Proxy: " + proxyString);

const base36Interactives = () => {
  // Look for scripts hash
  const encodedHashElement = document.querySelector(
    "[name^='interactivescripts']"
  );

  // Decode the base 36 hash
  const decoded = decode(a2o(encodedHashElement.getAttribute("name")).encoded);

  // Function to load script into page
  function loadModule(url) {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", url);
    document.head.appendChild(scriptTag);
  }

  // Loop through the scripts
  for (const script of decoded.scripts) {
    loadModule(script);
  }
};

export default base36Interactives;

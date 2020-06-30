import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default {
  input: "src/module.js",
  output: {
    file: "build/bundle.js",
    format: "umd",
    name: "base36Interactives"
  },
  plugins: [commonjs(), resolve(), nodePolyfills()]
};

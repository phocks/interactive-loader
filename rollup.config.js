import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/module.js",
  output: {
    file: "build/bundle.js",
    format: "umd",
    name: "base36Interactives"
  },
  plugins: [
    commonjs(),
    resolve({ preferBuiltins: false }),
    nodePolyfills(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    }),
    terser()
  ]
};

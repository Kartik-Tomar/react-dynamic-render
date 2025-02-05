import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    terser(),
  ],
};

import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: "src/index.js",
  output: {
    name: "chem-pinyin",
    file: "dist/pinyin.js",
    format: "cjs"
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
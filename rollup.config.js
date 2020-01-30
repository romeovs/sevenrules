import path from "path"

import hashbang from "rollup-plugin-hashbang"

export default [
  {
    input: path.resolve("./src/index.js"),
    output: {
      file: path.resolve("./dist/lib.js"),
      format: "cjs",
    },
  },
  {
    input: path.resolve("./bin/husky.js"),
    output: {
      file: path.resolve("./dist/husky.js"),
      format: "cjs",
    },
    plugins: [
      hashbang(),
    ],
  },
]

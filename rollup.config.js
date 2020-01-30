import path from "path"

export default {
  input: path.resolve("./src/index.js"),
  output: {
    file: path.resolve("./dist/lib.js"),
    format: "cjs",
  },
}

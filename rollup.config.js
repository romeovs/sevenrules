import path from "path"

import hashbang from "rollup-plugin-hashbang"

const external = [
	"fs",
	"path",
]

export default [
	{
		input: path.resolve("./src/index.js"),
		output: {
			file: path.resolve("./dist/lib.js"),
			format: "cjs",
		},
		external,
	},
	{
		input: path.resolve("./src/bin/sevenrules.js"),
		output: {
			file: path.resolve("./dist/sevenrules.js"),
			format: "cjs",
		},
		plugins: [
			hashbang(),
		],
		external,
	},
]

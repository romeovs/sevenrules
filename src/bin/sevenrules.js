#!/usr/bin/env node
/* eslint-disable no-process-env, no-process-exit, no-console */

/**
 * @file Husky hook to validate with sevenrules.
 * @module sevenruleshusky
 */

import fs from "fs"
import { validateAll } from "../index"

const filename = process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS || process.argv[2]

if (!filename) {
	throw new Error("Must be run as a git or husky commit-msg hook")
}

const message = fs.readFileSync(filename, "utf8")
const results = validateAll(message)

for (const key in results) {
	if (results[key] === null) {
		continue
	}

	console.log("Your commit message breaks one of the seven rules of commit messages")
	console.log()
	console.log(`  Rule ${key}: ${results[key]}`)
	console.log()
	console.log("For more info on the seven rules, see https://chris.beams.io/posts/git-commit")
	process.exit(1)
}

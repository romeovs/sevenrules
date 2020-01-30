#!/usr/bin/env node

/**
 * @file Husky hook to validate with sevenrules.
 * @module sevenruleshusky
 */

import fs from 'fs'
import { validateAll, rule1, rule2, rule3, rule4, rule5, rule6 } from '../index'

var messagePath = process.env['GIT_PARAMS'] || process.env['HUSKY_GIT_PARAMS']
if (!messagePath) {
  throw new Error('Must be run as a husky commit-msg hook')
}

var message = fs.readFileSync(messagePath, 'utf8')

var results = validateAll(message)

for (const key in results) {
  if (results[key] === null) {
    continue
  }

  console.log('Your commit message breaks of the seven rules of commit messages')
  console.log()
  console.log(`  Rule ${key}: ${results[key]}`)
  console.log()
  console.log('For more info on the seven rules, see https://chris.beams.io/posts/git-commit')
  process.exit(1)
}

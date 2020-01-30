#!/usr/bin/env node

/**
 * @file Husky hook to validate with sevenrules.
 * @module sevenruleshusky
 */

'use strict'

// Imports
import fs from 'fs'
import { validateAll } from '../validateAll'

var messagePath = process.env['GIT_PARAMS'] || process.env['HUSKY_GIT_PARAMS']
if (!messagePath) {
  throw new Error('Must be run as a husky commit-msg hook')
}

var message = fs.readFileSync(messagePath, 'utf8')

var results = validateAll(message)
if (!(
  results[1] &&
  results[2] &&
  results[3] &&
  results[4] &&
  results[5] &&
  results[6]
)) {
  console.log('Your commit message breaks of the seven rules of commit messages')
  console.log()
  if (!results[1]) console.log('  Rule 1: ' + sevenrules.rule1.rule)
  if (!results[2]) console.log('  Rule 2: ' + sevenrules.rule2.rule)
  if (!results[3]) console.log('  Rule 3: ' + sevenrules.rule3.rule)
  if (!results[4]) console.log('  Rule 4: ' + sevenrules.rule4.rule)
  if (!results[5]) console.log('  Rule 5: ' + sevenrules.rule5.rule)
  if (!results[6]) console.log('  Rule 6: ' + sevenrules.rule6.rule)
  console.log()
  console.log('For more info on the seven rules, see https://chris.beams.io/posts/git-commit')
  process.exit(1)
}

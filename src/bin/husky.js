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
  if (!results[1]) console.log('  Rule 1: ' + rule1.text)
  if (!results[2]) console.log('  Rule 2: ' + rule2.text)
  if (!results[3]) console.log('  Rule 3: ' + rule3.text)
  if (!results[4]) console.log('  Rule 4: ' + rule4.text)
  if (!results[5]) console.log('  Rule 5: ' + rule5.text)
  if (!results[6]) console.log('  Rule 6: ' + rule6.text)
  console.log()
  console.log('For more info on the seven rules, see https://chris.beams.io/posts/git-commit')
  process.exit(1)
}

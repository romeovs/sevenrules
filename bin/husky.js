#!/usr/bin/env node

/**
 * @file Husky hook to validate with sevenrules.
 * @module sevenruleshusky
 */

'use strict'

// Imports
var fs = require('fs')
var sevenrules = require('..')

var messagePath = process.env['GIT_PARAMS'] || process.env['HUSKY_GIT_PARAMS']
if (!messagePath) {
  throw new Error('Must be run as a husky commit-msg hook')
}
var message = fs.readFileSync(messagePath, 'utf8')
var results = sevenrules.validateAll(message)
if (!(
  results[1] &&
  results[2] &&
  results[3] &&
  results[4] &&
  results[5] &&
  results[6]
)) {
  console.log('Valorous magus, thy commit message hast some problems.')
  console.log('Please try the following changes:')
  if (!results[1]) console.log('  ' + sevenrules.rule1.rule)
  if (!results[2]) console.log('  ' + sevenrules.rule2.rule)
  if (!results[3]) console.log('  ' + sevenrules.rule3.rule)
  if (!results[4]) console.log('  ' + sevenrules.rule4.rule)
  if (!results[5]) console.log('  ' + sevenrules.rule5.rule)
  if (!results[6]) console.log('  ' + sevenrules.rule6.rule)
  process.exit(1)
}

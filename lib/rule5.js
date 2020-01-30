/**
 * @file Validate against rule 5.
 * @module sevenrules/rule5
 */

'use strict'

// Imports
var splitLines = require('./lines')
var blacklist = require('./blacklist')

/** Text of the rule. */
exports.rule =
  'Use the imperative mood in the subject line'


/**
 * Validate a commit message against rule 5.
 *
 *   Rule 5: Use the imperative mood in the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 5.
 */
exports.validate = function validate (message) {
  var line = splitLines(message)[0]
  var first = line.split(/\s+/).filter(s => s !== '')[0]

  if (blacklist.indexOf(first.toLowerCase()) !== -1) {
    return false
  }

  return true
}

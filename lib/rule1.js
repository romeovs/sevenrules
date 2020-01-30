/**
 * @file Validate against rule 1.
 * @module sevenrules/rule1
 */

'use strict'

// Imports
var re = require('./re')

/** Text of the rule. */
exports.rule =
  'Separate subject from body with a blank line'

/**
 * Validate a commit message against rule 1.
 *
 *   Rule 1: Separate subject from body with a blank line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 1.
 */
exports.validate = function validate (message) {
  var lines = message.split(re.lineBreak)
  if (lines.length < 2) return true
  if (lines[1].length > 0) return false
  return true
}

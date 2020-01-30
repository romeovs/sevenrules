/**
 * @file Validate against rule 6.
 * @module sevenrules/rule6
 */

'use strict'

// Imports
var re = require('./re')

/** The text of the rule. */
exports.rule =
  'Wrap the body at 72 characters'

/**
 * Validate a commit message against rule 6.
 *
 *   Rule 6: Wrap the body at 72 characters
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if message satisfies rule 6.
 */
exports.validate = function validate (message) {
  var lines = message.split(re.lineBreak)
  for (var i = 2; i < lines.length; i++) {
    if (lines[i].length > 72) return false
  }
  return true
}

/**
 * @file Validate against rule 3.
 * @module sevenrules/rule3
 */

'use strict'

// Imports
var re = require('./re')

/** Text of the rule. */
exports.rule =
  'Capitalize the subject line'

/**
 * Validate a commit message against rule 3.
 *
 *   Rule 3: Capitalize the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 3.
 */
exports.validate = function validate (message) {
  if (message.length === 0) return false
  var firstCharacter = message.charAt(0)
  var match = firstCharacter.match(re.capitalLetter)
  if (match === null) return false
  return true
}

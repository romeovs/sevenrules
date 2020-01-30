/**
 * @file Validate against rule 2.
 * @module sevenrules/rule2
 */

'use strict'

// Imports
var re = require('./re')

/** Text of the rule. */
exports.rule =
  'Limit the subject line to 72 characters'

/**
 * Validate a commit message against rule 2.
 *
 *   Rule 2: Limit the subject line to 72 characters.
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 2.
 */
exports.validate = function validate (message) {
  var lines = message.split(re.lineBreak)
  var subject = lines[0]
  if (subject.length > 72) return false
  return true
}

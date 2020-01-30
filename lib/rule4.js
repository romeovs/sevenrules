/**
 * @file Validate against rule 4.
 * @module sevenrules/rule4
 */

'use strict'

// Imports
var re = require('./re')

/** The text of the rule. */
exports.rule =
  'Do not end the subject line with a period'

/**
 * Validate a commit message against rule 4.
 *
 *   Rule 4: Do not end the subject line with a period
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 4.
 */
exports.validate = function validate (message) {
  var lines = message.split(re.lineBreak)
  var subject = lines[0]
  var lastCharacter = subject.charAt(subject.length - 1)
  var match = lastCharacter.match(re.period)
  if (match === null) return true
  return false
}

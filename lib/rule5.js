/**
 * @file Validate against rule 5.
 * @module sevenrules/rule5
 */

'use strict'

// Imports
var re = require('./re')
var blacklist = require('./blacklist')

/** Text of the rule. */
exports.rule =
  'Use the imperative mood in the subject line'


/**
 * Validate a commit message against rule 5.
 * @param {string} message - The commit message.
 * @return {boolean}
 *     Whether the message satisfies rule 5.
 */
exports.validate = function validate (message) {
  var line = message.split(re.lineBreak)[0]
  var first = line.split(/\s+/).filter(s => s !== '')[0]

  if (blacklist.indexOf(first.toLowerCase()) !== -1) {
    return false
  }

  return true
}

/**
 * @file Simple validation of a commit message.
 * @module sevenrules/validate
 */

'use strict'

var validateAll = require('./validateAll.js')

/**
 * Validate a commit message with simple result.
 * @param {string} message - The commit message.
 * @return {boolean}
 *     Whether the message satisfies all rules.
 */
module.exports = function validate (message) {
  const results = validateAll(message)
  return Object.values(results).every(res => res)
}

/**
 * @file Simple validation of a commit message.
 * @module sevenrules/validate
 */

'use strict'

// Imports
var rule1 = require('./rule1')
var rule2 = require('./rule2')
var rule3 = require('./rule3')
var rule4 = require('./rule4')
var rule5 = require('./rule5')
var rule6 = require('./rule6')

/**
 * Validate a commit message with simple result.
 * @param {string} message - The commit message.
 * @return {boolean}
 *     Whether the message satisfies all rules.
 */
module.exports = function validate (message) {
  if (!rule1.validate(message)) return false
  if (!rule2.validate(message)) return false
  if (!rule3.validate(message)) return false
  if (!rule4.validate(message)) return false
  if (!rule6.validate(message)) return false
  return true
}

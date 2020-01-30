/**
 * @file Full validation of a commit message.
 * @module sevenrules/validateAll
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
 * Validation results.
 * @typedef {object} results
 * @prop {boolean} 1 - Whether the message satisfies rule 1.
 * @prop {boolean} 2 - Whether the message satisfies rule 2.
 * @prop {boolean} 3 - Whether the message satisfies rule 3.
 * @prop {boolean} 4 - Whether the message satisfies rule 4.
 * @prop {boolean} 5 - Whether the message satisfies rule 5.
 * @prop {boolean} 6 - Whether the message satisfies rule 6.
 */

/**
 * Validate a commit message with full results.
 * @param {string} message - The commit message.
 * @return {module:sevenrules/validateAll~results}
 *     Validation results for all rules.
 */
module.exports = function validateAll (message) {
  return {
    1: rule1.validate(message),
    2: rule2.validate(message),
    3: rule3.validate(message),
    4: rule4.validate(message),
    5: rule5.validate(message),
    6: rule6.validate(message)
  }
}

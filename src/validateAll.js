/**
 * @file Full validation of a commit message.
 * @module sevenrules/validateAll
 */

import { rule1 } from './rule1'
import { rule2 } from './rule2'
import { rule3 } from './rule3'
import { rule4 } from './rule4'
import { rule5 } from './rule5'
import { rule6 } from './rule6'

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
export function validateAll (message) {
  return {
    1: rule1(message),
    2: rule2(message),
    3: rule3(message),
    4: rule4(message),
    5: rule5(message),
    6: rule6(message)
  }
}

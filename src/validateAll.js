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
 * Rules dict.
 * @typedef {object} rules
 * @prop {boolean} 1 - Whether the message satisfies rule 1.
 * @prop {boolean} 2 - Whether the message satisfies rule 2.
 * @prop {boolean} 3 - Whether the message satisfies rule 3.
 * @prop {boolean} 4 - Whether the message satisfies rule 4.
 * @prop {boolean} 5 - Whether the message satisfies rule 5.
 * @prop {boolean} 6 - Whether the message satisfies rule 6.
 */

/**
 * All rules.
 */
const all = {
  1: rule1,
  2: rule2,
  3: rule3,
  4: rule4,
  5: rule5,
  6: rule6,
}

/**
 * Validate a commit message with full results.
 * @param {string} message - The commit message.
 * @param {rules?} rules - The rules to check for.
 * @return {module:sevenrules/validateAll~results} - Validation results for all rules.
 */
export function validateAll (message, rules = all) {
  const res = {}
  for (const key in rules) {
    res[key] = rules[key](message)
  }

  return res
}

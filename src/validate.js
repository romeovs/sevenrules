/**
 * @file Simple validation of a commit message.
 * @module sevenrules/validate
 */

import { validateAll } from './validateAll.js'

/**
 * Validate a commit message with simple result.
 * @param {string} message - The commit message.
 * @param {rules?} rules - The rules to check.
 * @return {boolean}
 *     Whether the message satisfies all rules.
 */
export function validate (message, rules) {
  const results = validateAll(message, rules)
  return Object.values(results).every(res => res)
}

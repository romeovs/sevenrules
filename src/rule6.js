/**
 * @file Validate against rule 6.
 * @module sevenrules/rule6
 */

'use strict'

import { lines as split } from './lines'

/** The text of the rule. */
export const text = 'Wrap the body at 72 characters'

/**
 * Validate a commit message against rule 6.
 *
 *   Rule 6: Wrap the body at 72 characters
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if message satisfies rule 6.
 */
export function rule6 (message) {
  var lines = split(message)
  for (var i = 2; i < lines.length; i++) {
    if (lines[i].length > 72) return false
  }
  return true
}

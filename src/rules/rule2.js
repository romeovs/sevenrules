/**
 * @file Validate against rule 2.
 * @module sevenrules/rule2
 */

import { lines as split } from '../lines'

/**
 * Validate a commit message against rule 2.
 *
 *   Rule 2: Limit the subject line to 72 characters.
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 2.
 */
export function rule2 (message) {
  var lines = split(message)
  var subject = lines[0]
  if (subject.length > 72) return false
  return true
}

/** Text of the rule. */
rule2.text = 'Limit the subject line to 72 characters'

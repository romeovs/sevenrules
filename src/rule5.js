/**
 * @file Validate against rule 5.
 * @module sevenrules/rule5
 */

import { lines as split } from './lines'
import { blacklist } from './blacklist'


/**
 * Validate a commit message against rule 5.
 *
 *   Rule 5: Use the imperative mood in the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 5.
 */
export function rule5 (message) {
  var line = split(message)[0]
  var first = line.split(/\s+/).filter(s => s !== '')[0]

  if (blacklist.indexOf(first.toLowerCase()) !== -1) {
    return false
  }

  return true
}

/** Text of the rule. */
rule5.text = 'Use the imperative mood in the subject line'

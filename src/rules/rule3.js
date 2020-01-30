/**
 * @file Validate against rule 3.
 * @module sevenrules/rule3
 */

import { exceptions } from '../exceptions'

/**
 * Capital letter. Currently naive.
 * @todo Use the correct means for Unicode text.
 */
var capitalLetter = /[A-Z]/

/**
 * Validate a commit message against rule 3.
 *
 *   Rule 3: Capitalize the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 3.
 */
export function rule3 (message) {
  var first = message.split(/\s+/).filter(s => s !== '')[0]
  if (exceptions.indexOf(first.toLowerCase()) !== -1) {
    return true
  }

  if (message.length === 0) return false
  var firstCharacter = message.charAt(0)
  var match = firstCharacter.match(capitalLetter)
  if (match === null) return false
  return true
}

/** Text of the rule. */
rule3.text = 'Capitalize the subject line'
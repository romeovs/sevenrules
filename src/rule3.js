/**
 * @file Validate against rule 3.
 * @module sevenrules/rule3
 */

/**
 * Capital letter. Currently naive.
 * @todo Use the correct means for Unicode text.
 */
var capitalLetter = /[A-Z]/

/** Text of the rule. */
export const text = 'Capitalize the subject line'

/**
 * Validate a commit message against rule 3.
 *
 *   Rule 3: Capitalize the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 3.
 */
export function rule3 (message) {
  if (message.length === 0) return false
  var firstCharacter = message.charAt(0)
  var match = firstCharacter.match(capitalLetter)
  if (match === null) return false
  return true
}

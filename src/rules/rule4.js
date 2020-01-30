/**
 * @file Validate against rule 4.
 * @module sevenrules/rule4
 */

import { lines as split } from "../lines"


/**
 * Match a period character. Currently naive.
 * @todo Detect all Unicode period characters.
 */
const period = /\./

/**
 * Validate a commit message against rule 4.
 *
 *	 Rule 4: Do not end the subject line with a period
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 4.
 */
export function rule4 (message) {
	const [ subject ] = split(message)
	const lastCharacter = subject.charAt(subject.length - 1)
	const match = lastCharacter.match(period)
	if (match === null) {
		return true
	}
	return false
}

/** The text of the rule. */
rule4.text = "Do not end the subject line with a period"

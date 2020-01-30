/**
 * @file Validate against rule 2.
 * @module sevenrules/rule2
 */

import { lines as split } from "../lines"

/**
 * Validate a commit message against rule 2.
 *
 *	 Rule 2: Limit the subject line to 72 characters.
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 2.
 */
export function rule2 (message) {
	const [ subject ] = split(message)

	if (subject.length > 72) {
		// Subject length is too long
		return false
	}

	return true
}

/** Text of the rule. */
rule2.text = "Limit the subject line to 72 characters"

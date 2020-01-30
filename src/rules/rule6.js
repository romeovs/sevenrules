/**
 * @file Validate against rule 6.
 * @module sevenrules/rule6
 */

import { lines as split } from "../lines"

/**
 * Validate a commit message against rule 6.
 *
 *	 Rule 6: Wrap the body at 72 characters
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if message satisfies rule 6.
 */
export function rule6 (message) {
	const lines = split(message)
	for (let i = 2; i < lines.length; i++) {
		if (lines[i].length > 72) {
			return false
		}
	}
	return true
}

/** The text of the rule. */
rule6.text = "Wrap the body at 72 characters"

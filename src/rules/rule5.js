/**
 * @file Validate against rule 5.
 * @module sevenrules/rule5
 */

import { lines as split } from "../lines"
import { words } from "../words"
import { blacklist } from "../blacklist"

/**
 * Validate a commit message against rule 5.
 *
 *	 Rule 5: Use the imperative mood in the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 5.
 */
export function rule5 (message) {
	const [ subject ] = split(message)
	const [ first ] = words(subject)
	const lower = first.toLowerCase()

	if (blacklist.includes(lower)) {
		// If the word is on the blacklist, it's not in the imperative mood
		return false
	}

	return true
}

/** Text of the rule. */
rule5.text = "Use the imperative mood in the subject line"

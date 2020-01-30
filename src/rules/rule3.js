/**
 * @file Validate against rule 3.
 * @module sevenrules/rule3
 */

import { exceptions } from "../exceptions"
import { lines as split } from "../lines"
import { words } from "../words"

/**
 * Capital letter. Currently naive.
 * @todo Use the correct means for Unicode text.
 */
const capitalLetter = /[A-Z]/

/**
 * Validate a commit message against rule 3.
 *
 *	 Rule 3: Capitalize the subject line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 3.
 */
export function rule3 (message) {
	const [ subject ] = split(message)
	const [ first ] = words(subject)
	const lower = first.toLowerCase()

	if (exceptions.includes(lower)) {
		// Ignore special commit messages
		return true
	}

	if (message.length === 0) {
		// Empty messages are forbidden
		return false
	}

	const char = message.charAt(0)
	if (char.match(capitalLetter) === null) {
		// First character is not capitalised
		return false
	}

	return true
}

/** Text of the rule. */
rule3.text = "Capitalize the subject line"

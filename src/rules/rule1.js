import { lines as split } from "../lines"

/**
 * Validate a commit message against rule 1.
 *
 *	 Rule 1: Separate subject from body with a blank line
 *
 * @param {string} message - The commit message.
 * @return {boolean} - true if the message satisfies rule 1.
 */
export function rule1 (message) {
	const lines = split(message)

	if (lines.length < 2) {
		// No body given
		return true
	}

	if (lines[1] !== "") {
		// Second line is not empty
		return false
	}

	return true
}

/** Text of the rule. */
rule1.text = "Separate subject from body with a blank line"

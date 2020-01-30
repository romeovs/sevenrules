/**
 * @file Simple validation of a commit message.
 * @module sevenrules/validate
 */

import { rule1 } from "./rules/rule1"
import { rule2 } from "./rules/rule2"
import { rule3 } from "./rules/rule3"
import { rule4 } from "./rules/rule4"
import { rule5 } from "./rules/rule5"
import { rule6 } from "./rules/rule6"

import { special } from "./special"

/**
 * Validation results.
 * @typedef {object} results
 * @prop {string | null} 1 - Null if the message adheres to rule 1, a string with the error otherwise
 * @prop {string | null} 2 - Null if the message adheres to rule 2, a string with the error otherwise
 * @prop {string | null} 3 - Null if the message adheres to rule 3, a string with the error otherwise
 * @prop {string | null} 4 - Null if the message adheres to rule 4, a string with the error otherwise
 * @prop {string | null} 5 - Null if the message adheres to rule 5, a string with the error otherwise
 * @prop {string | null} 6 - Null if the message adheres to rule 6, a string with the error otherwise
 */

/**
 * Rules dict.
 * @typedef {object} rules
 */

/**
 * All rules.
 */
const all = {
	1: rule1,
	2: rule2,
	3: rule3,
	4: rule4,
	5: rule5,
	6: rule6,
}

/**
 * Validate a commit message with full results.
 * @param {string} message - The commit message.
 * @param {rules?} rules - The rules to check for.
 * @return {results} - Validation results for all rules.
 */
export function validateAll (message, rules = all) {
	if (special(message)) {
		return {}
	}

	const res = {}
	for (const key in rules) {
		res[key] =
			rules[key](message)
				? null
				: rules[key].text || `rule ${key} failed`
	}

	return res
}

/**
 * Validate a commit message with simple result.
 * @param {string} message - The commit message.
 * @param {rules?} rules - The rules to check.
 * @return {string | null} - The description of the rule if it violates, null otherwise
 */
export function validate (message, rules) {
	const results = validateAll(message, rules)
	return !Object.values(results).find(res => res !== null)
}

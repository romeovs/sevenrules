
/**
 * Split a string into words.
 *
 * @param {string} str - The string to split.
 * @returns {string[]} - An array containing all the non-empty words.
 */
export function words (str) {
	return str.split(/\s+/).filter(s => s !== "")
}

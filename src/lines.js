/**
 * Split the message up in lines.
 *
 * @param {string} message - The commit message.
 * @return {string[]} - The lines of the message.
 */
export function lines (message) {
	return message.split(/\r\n|[\r\n]/)
}

const matchers = {
	fixup (message) {
		return message.toLowerCase().startsWith("fixup!")
	},
	version (message) {
		return message.trim().match(/^v\d+\.\d+\.\d+$/)
	},
}

export function special (message) {
	return Object.values(matchers).some(matcher => matcher(message))
}

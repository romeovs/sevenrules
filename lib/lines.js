'use strict'

var lineBreak = /\r\n|[\r\n]/

/**
 * Split the message up in lines.
 *
 * @param {string} message - The commit message.
 * @return {string[]} - The lines of the message.
 */
module.exports = function lines (message) {
  return message.split(lineBreak)
}

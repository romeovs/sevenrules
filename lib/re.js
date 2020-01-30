/**
 * @file Regular expressions.
 * @module sevenrules/re
 */

'use strict'

/**
 * Line break. Currently naive.
 * @todo Use the Unicode recommended pattern.
 */
exports.lineBreak = /\r\n|[\r\n]/

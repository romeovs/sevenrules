import test from 'ava'
const re = require('./re')

const match = regexp => function match (t, text) {
  t.not(text.match(regexp), null)
}

const miss = regexp => function miss (t, text) {
  t.is(text.match(regexp), null)
}

test('lineBreak matches CR', match(re.lineBreak), '\u{D}')
test('lineBreak matches LF', match(re.lineBreak), '\u{A}')
test('lineBreak matches CRLF', match(re.lineBreak), '\u{D}\u{A}')
test('lineBreak misses letter', miss(re.lineBreak), 'a')

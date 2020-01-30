import test from 'ava'
const rule6 = require('./rule6')

function accept (t, message) {
  t.true(rule6.validate(message))
}

function reject (t, message) {
  t.false(rule6.validate(message))
}

test('accept wrap under 72 chars', accept,
  'Subject\n\n' + 'x'.repeat(20))
test('accept wrap at 72 chars', accept,
  'Subject\n\n' + 'x'.repeat(72))

test('reject wrap over 72 chars', reject,
  'Subject\n\n' + 'x'.repeat(73))

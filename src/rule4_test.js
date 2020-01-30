import test from 'ava'
const rule4 = require('./rule4')

function accept (t, message) {
  t.true(rule4.validate(message))
}

function reject (t, message) {
  t.false(rule4.validate(message))
}

test('accept unterminated subject', accept, 'Subject')

test('reject terminated subject', reject, 'Subject.')

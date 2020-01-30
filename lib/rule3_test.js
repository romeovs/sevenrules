import test from 'ava'
const rule3 = require('./rule3')

function accept (t, message) {
  t.true(rule3.validate(message))
}

function reject (t, message) {
  t.false(rule3.validate(message))
}

test('accept capitalized subject', accept, 'Subject')

test('reject uncapitalized subject', reject, 'subject')

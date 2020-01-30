import test from 'ava'
const rule1 = require('./rule1')

function accept (t, message) {
  t.true(rule1.validate(message))
}

function reject (t, message) {
  t.false(rule1.validate(message))
}

test('accept no body', accept, 'Subject line')
test('accept single line break', accept, 'Subject line\n')
test('accept double line break', accept, 'Subject line\n\n')
test('accept separated body', accept, 'Subject line\n\nBody')

test('reject unseparated body', reject, 'Subject line\nBody')

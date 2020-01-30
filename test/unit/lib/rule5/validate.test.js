import test from 'ava'
const rule1 = require('../../../../lib/rule5')

function accept (t, message) {
  t.true(rule1.validate(message))
}

function reject (t, message) {
  t.false(rule1.validate(message))
}

test('accept valid imperative tone', accept, 'Add test for foo')
test('reject invalid imperative tone', reject, 'Added test for foo')

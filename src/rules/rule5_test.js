import test from 'ava'
import { rule5 } from './rule5'

function accept (t, message) {
  t.true(rule5(message))
}

function reject (t, message) {
  t.false(rule5(message))
}

test('accept valid imperative tone', accept, 'Add test for foo')
test('reject invalid imperative tone', reject, 'Added test for foo')

import test from 'ava'
import { rule3 } from './rule3'

function accept (t, message) {
  t.true(rule3(message))
}

function reject (t, message) {
  t.false(rule3(message))
}

test('accept capitalized subject', accept, 'Subject')

test('reject uncapitalized subject', reject, 'subject')

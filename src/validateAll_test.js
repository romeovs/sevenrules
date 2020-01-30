import test from 'ava'
import sinon from 'sinon'

import { validateAll } from './validateAll'

// Dummy message
const message = 'Message'

// Mock rules
const foo = sinon.stub()
const bar = sinon.stub()

const rules = {
  foo,
  bar,
}

test.beforeEach(function (t) {
  foo.returns(true)
  bar.returns(true)
})

test.serial('rule foo pass reported', function (t) {
  foo.returns(true)
  const results = validateAll(message, rules)
  t.true(results.foo)
})

test.serial('rule foo pass reported', function (t) {
  foo.returns(false)
  const results = validateAll(message, rules)
  t.false(results.foo)
})

test.serial('rule bar pass reported', function (t) {
  bar.returns(true)
  const results = validateAll(message, rules)
  t.true(results.bar)
})

test.serial('rule bar pass reported', function (t) {
  bar.returns(false)
  const results = validateAll(message, rules)
  t.false(results.bar)
})

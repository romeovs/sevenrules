import test from 'ava'
import sinon from 'sinon'
import { validate } from './validate'

// Dummy message
const message = 'Message'

// Mock rules
const foo = sinon.stub()
const bar = sinon.stub()

const rules = {
  foo,
  bar,
}


test.serial('rule foo violation fails', function (t) {
  foo.returns(false)
  bar.returns(true)
  t.false(validate(message, rules))
})

test.serial('rule bar violation fails', function (t) {
  foo.returns(true)
  bar.returns(false)
  t.false(validate(message, rules))
})

test.serial('all rules satisfied passes', function (t) {
  foo.returns(true)
  bar.returns(true)
  t.true(validate(message, rules))
})

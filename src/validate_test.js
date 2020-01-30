import test from "ava"
import sinon from "sinon"
import { validate, validateAll } from "./validate"

// Dummy message
const message = "Message"

// Mock rules
const foo = sinon.stub()
const bar = sinon.stub()

const rules = {
	foo,
	bar,
}


test.serial("rule foo violation fails", function (t) {
	foo.returns(false)
	bar.returns(true)
	t.false(validate(message, rules))
})

test.serial("rule bar violation fails", function (t) {
	foo.returns(true)
	bar.returns(false)
	t.false(validate(message, rules))
})

test.serial("validate ignores special commit messages", function (t) {
	foo.returns(false)
	bar.returns(false)
	t.true(validate("fixup! Foo", rules))
	t.true(validate("v1.2.3", rules))
})

test.serial("all rules satisfied passes", function (t) {
	foo.returns(true)
	bar.returns(true)
	t.true(validate(message, rules))
})

test.serial("rule foo pass reported", function (t) {
	foo.returns(true)
	bar.returns(true)
	const results = validateAll(message, rules)
	t.is(results.foo, null)
})

test.serial("rule foo pass reported", function (t) {
	foo.returns(false)
	bar.returns(true)
	const results = validateAll(message, rules)
	t.truthy(results.foo)
})

test.serial("rule bar pass reported", function (t) {
	foo.returns(true)
	bar.returns(true)
	const results = validateAll(message, rules)
	t.is(results.bar, null)
})

test.serial("rule bar pass reported", function (t) {
	foo.returns(true)
	bar.returns(false)
	const results = validateAll(message, rules)
	t.truthy(results.bar)
})


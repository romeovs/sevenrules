import test from "ava"
import { special } from "./special"

test("special accepts fixup commits", function (t) {
	t.true(special("fixup! Foo bar baz"))
})

test("special accepts version commits", function (t) {
	t.true(special("v0.1.2"))
	t.true(special("v12.3.4"))
})

test("special rejects other commits", function (t) {
	t.false(special("Merge foo"))
	t.false(special("Update package.json"))
})

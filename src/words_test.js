import test from "ava"
import { words } from "./words"

test("lines splits message at space", function (t) {
	t.deepEqual(words("Foo Bar"), [ "Foo", "Bar" ])
})

test("lines splits message at more than one space", function (t) {
	t.deepEqual(words("Foo   Bar "), [ "Foo", "Bar" ])
})

test("words splits message at newline", function (t) {
	t.deepEqual(words("Foo\nBar"), [ "Foo", "Bar" ])
})

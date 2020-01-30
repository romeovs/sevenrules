import test from "ava"
import { lines } from "./lines"

test("lines splits message at CR", function (t) {
	t.deepEqual(lines("Foo\u{D}Bar"), [ "Foo", "Bar" ])
})

test("lines splits message at LF", function (t) {
	t.deepEqual(lines("Foo\u{A}Bar"), [ "Foo", "Bar" ])
})

test("lines splits message at CRLF", function (t) {
	t.deepEqual(lines("Foo\u{D}\u{A}Bar"), [ "Foo", "Bar" ])
})

test("lines does not split message w/o line breaks", function (t) {
	t.deepEqual(lines("Foo Bar"), [ "Foo Bar" ])
})

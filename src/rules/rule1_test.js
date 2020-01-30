import test from "ava"
import { rule1 } from "./rule1"

function accept (t, message) {
	t.true(rule1(message))
}

function reject (t, message) {
	t.false(rule1(message))
}

test("accept no body", accept, "Subject line")
test("accept single line break", accept, "Subject line\n")
test("accept double line break", accept, "Subject line\n\n")
test("accept separated body", accept, "Subject line\n\nBody")

test("reject unseparated body", reject, "Subject line\nBody")

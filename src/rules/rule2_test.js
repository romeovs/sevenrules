import test from "ava"
import { rule2 } from "./rule2"

function accept (t, message) {
	t.true(rule2(message))
}

function reject (t, message) {
	t.false(rule2(message))
}

test("accept under 50 chars", accept, "X".repeat(20))
test("accept 50 chars", accept, "X".repeat(50))
test("accept over 50 under 72 chars", accept, "X".repeat(60))
test("accept 72 chars", accept, "X".repeat(72))
test("reject over 72 chars", reject, "X".repeat(73))

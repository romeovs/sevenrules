import test from "ava"
import { rule4 } from "./rule4"

function accept (t, message) {
	t.true(rule4(message))
}

function reject (t, message) {
	t.false(rule4(message))
}

test("accept unterminated subject", accept, "Subject")

test("reject terminated subject", reject, "Subject.")

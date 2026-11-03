// node scripts/hours.check.mjs
import assert from "node:assert/strict";
import { statusAt, manilaNow, span, hours } from "../app/data.ts";

assert.equal(statusAt(1, 9 * 60).text, "Open now, closes 8:30 PM");
assert.equal(statusAt(1, 20 * 60 + 30).text, "Closed now, opens 8 AM tomorrow");
assert.equal(statusAt(6, 21 * 60).text, "Closed now, opens 7 AM tomorrow");
assert.equal(statusAt(1, 6 * 60).text, "Closed now, opens 8 AM today");
assert.equal(span(hours[0]), "7 AM to 8:30 PM");
// 2026-11-02 16:00 UTC is Tuesday 00:00 in Manila.
assert.deepEqual(manilaNow(new Date("2026-11-02T16:00:00Z")), { day: 2, minutes: 0 });
console.log("hours ok");

import { numberToRoman } from "../src/roman";

describe("Roman numbers tests", () => {
	test(`converting 1 into I`, () => {
		const actual = numberToRoman(1);
		expect(actual).toBe("I");
	});
});

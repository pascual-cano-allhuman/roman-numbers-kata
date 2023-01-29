const digits = { 1: "I", 5: "V" };

export const numberToRoman = (n: number): string => {
	if (n >= 5) return digits[5];
	return "".padStart(n, digits[1]);
};

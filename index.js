const { sum, multiply } = require("./helpers.js");

describe("Helper Functions", () => {
  describe("sum function", () => {
    it("should add two numbers correctly", () => {
      expect(sum(1, 2)).toBe(3); // 1 + 2 = 3
      expect(sum(-1, -2)).toBe(-3); // -1 + (-2) = -3
      expect(sum(5, -3)).toBe(2); // 5 + (-3) = 2
      expect(sum(0, 0)).toBe(0); // 0 + 0 = 0
    });
  });

  describe("multiply function", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(2, 3)).toBe(6); // 2 * 3 = 6
      expect(multiply(-4, 5)).toBe(-20); // -4 * 5 = -20
      expect(multiply(0, 10)).toBe(0); // 0 * 10 = 0
      expect(multiply(1, 1)).toBe(1); // 1 * 1 = 1
    });
  });
});

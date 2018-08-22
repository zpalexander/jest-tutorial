import basic from "./basic";

/**
 * Stuck? Check this out:
 * https://jestjs.io/docs/en/using-matchers
 */

describe("basic", () => {
  it("should add two numbers and return the result", () => {
    expect(basic(1, 1)).toEqual(2);
  });
});

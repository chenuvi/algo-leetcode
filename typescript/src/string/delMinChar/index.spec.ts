import { delMinChar } from "./index";
// Describe the test suite
describe("add function", () => {
  // Test case 1
  it("ababac", () => {
    expect(delMinChar("ababac")).toBe("ababa");
  });

  // Test case 2
  it("cabacbac", () => {
    expect(delMinChar("cabacbac")).toBe("caacac");
  });

  // Test case 3
  it("should return NaN if one of the arguments is not a number", () => {
    expect(delMinChar("")).toBe("");
  });
});

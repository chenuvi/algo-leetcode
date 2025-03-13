import { removeDuplicates } from "./remove-all-adjacent-duplicates-in-string";

describe("removeDuplicates", () => {
  test("should return the same string when no duplicates", () => {
    expect(removeDuplicates("abc")).toBe("abc");
  });

  test("should remove adjacent duplicates", () => {
    expect(removeDuplicates("aabbcc")).toBe(""); // 修正预期结果
  });

  test("should handle empty string", () => {
    expect(removeDuplicates("")).toBe("");
  });

  test("should handle single character string", () => {
    expect(removeDuplicates("a")).toBe("a");
  });

  test("should remove all adjacent duplicates in complex string", () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
  });

  test("should remove all adjacent duplicates in complex string", () => {
    expect(removeDuplicates("azxxzy")).toBe("ay");
  });
});

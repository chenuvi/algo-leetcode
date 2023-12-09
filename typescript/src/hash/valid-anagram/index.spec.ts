import { isAnagram } from "./index";

describe("isAnagram", () => {
  it(`输入: s = "anagram", t = "nagaram" 输出: true`, () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it(`输入: s = "rat", t = "car" 输出: false`, () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});

import { reverseWords } from "./index";
describe("reverseWords", () => {
  it("should correctly reverse the order of words in a sentence", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    expect(reverseWords("  hello world  ")).toBe("world hello");
    expect(reverseWords("a good   example")).toBe("example good a");
    // 测试包含数字和大小写字母的情况
    // expect(reverseWords("Hello 123 World! This is a test.")).toBe(
    //   "test a is This World! 123 Hello"
    // );
    // 测试只有一个单词的情况
    expect(reverseWords("one")).toBe("one");
    // 测试仅包含空格的情况
    expect(reverseWords(" ")).toBe("");
  });
});

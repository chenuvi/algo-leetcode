import { isValid } from "./valid-parentheses";

describe("isValid", () => {
  it("should correctly validate parentheses", () => {
    // 示例 1：输入：s = "()"，输出：true
    expect(isValid("()")).toBe(true);

    // 示例 2：输入：s = "()[]{}"，输出：true
    expect(isValid("()[]{}")).toBe(true);

    // 示例 3：输入：s = "(]"，输出：false
    expect(isValid("(]")).toBe(false);

    // 示例 4：输入：s = "([])"，输出：true
    expect(isValid("([])")).toBe(true);

    // 额外测试用例
    // 测试空字符串
    expect(isValid("")).toBe(true);

    // 测试单个字符
    expect(isValid("[")).toBe(false);
    expect(isValid("}")).toBe(false);

    // 测试复杂嵌套
    expect(isValid("{[()]}")).toBe(true);
    expect(isValid("{[(])}")).toBe(false);

    // 测试连续相同类型的括号
    expect(isValid("(())")).toBe(true);
    expect(isValid("[[[]]]")).toBe(true);

    // 测试混合多种括号的复杂情况
    expect(isValid("()[{}]{}")).toBe(true);
    expect(isValid("([{}])")).toBe(true);
    expect(isValid("([)]")).toBe(false);
  });
});

import { reverseString } from "./index";
describe("reverseString", () => {
  it("should reverse the input string array", () => {
    const input1 = ["h", "e", "l", "l", "o"];
    reverseString(input1);
    expect(input1).toEqual(["o", "l", "l", "e", "h"]);

    const input2 = ["H", "a", "n", "n", "a", "h"];
    reverseString(input2);
    expect(input2).toEqual(["h", "a", "n", "n", "a", "H"]);
  });

  it("should handle an empty string array", () => {
    const input3: string[] = [];
    reverseString(input3);
    expect(input3).toEqual([]);
  });

  it("should handle a single character string array", () => {
    const input4 = ["c"];
    reverseString(input4);
    expect(input4).toEqual(["c"]);
  });
});

import { minSubArrayLen } from "./minSubArrayLen";

describe("minSubArrayLen", () => {
  it("should return 0 if the array is empty", () => {
    expect(minSubArrayLen(7, [])).toBe(0);
  });

  it("should return 0 if no subarray is found", () => {
    expect(minSubArrayLen(14, [2, 3, 1, 2, 4])).toBe(0);
  });

  it("should return the length of the smallest subarray that sums up to the target", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3, 7])).toBe(1);
    expect(minSubArrayLen(7, [2, 1, 5, 2, 3, 2])).toBe(2);
    expect(minSubArrayLen(8, [3, 4, 1, 1, 6])).toBe(3);
  });
});

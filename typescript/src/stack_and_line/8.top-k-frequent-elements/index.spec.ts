import { topKFrequent } from "./index";

describe("topKFrequent", () => {
  test("示例1：返回出现频率前k高的元素", () => {
    expect(new Set(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual(new Set([1, 2]));
  });

  test("示例2：数组只有一个元素的情况", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("包含负数的情况", () => {
    expect(new Set(topKFrequent([-1, -1, 2, 2, 2, 3], 2))).toEqual(new Set([2, -1]));
  });

  test("包含零的情况", () => {
    expect(new Set(topKFrequent([0, 0, 0, 1, 1, 2], 2))).toEqual(new Set([0, 1]));
  });

  test("所有元素频率相同的情况", () => {
    expect(new Set(topKFrequent([1, 2, 3, 4], 4))).toEqual(new Set([1, 2, 3, 4]));
  });
});

import { threeSum } from "./index";

describe("threeSum", () => {
  it("should return all unique triplets that sum up to 0", () => {
    const nums1 = [-1, 0, 1, 2, -1, -4];
    const expected1 = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums1)).toEqual(expect.arrayContaining(expected1));

    const nums2 = [0, 1, 1];
    const expected2: number[][] = [];
    expect(threeSum(nums2)).toEqual(expected2);

    const nums3 = [0, 0, 0];
    const expected3 = [[0, 0, 0]];
    expect(threeSum(nums3)).toEqual(expected3);
  });
});

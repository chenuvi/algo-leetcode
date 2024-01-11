import { merge } from "./merge";

test("merge arrays", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);

  const nums3 = [1];
  const m1 = 1;
  const nums4: any[] = [];
  const n1 = 0;
  merge(nums3, m1, nums4, n1);
  expect(nums3).toEqual([1]);

  const nums5 = [0];
  const m2 = 0;
  const nums6 = [1];
  const n2 = 1;
  merge(nums5, m2, nums6, n2);
  expect(nums5).toEqual([1]);
});

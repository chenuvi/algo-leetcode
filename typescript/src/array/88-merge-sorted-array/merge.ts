// [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/description/)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1,
    p2 = n - 1,
    p = n + m - 1;
  while (p1 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p--] = nums2[p2--];
    } else {
      nums1[p--] = nums1[p1--];
    }
  }
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}

export { merge };

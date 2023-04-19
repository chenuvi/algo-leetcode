export function minSubArrayLen(target: number, nums: number[]): number {
  let [left, right] = [0, 0];
  let [res, sum] = [nums.length + 1, 0];
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      // 不断移动左指针，直到不能再缩小为止
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      res = Math.min(res, right - left + 1);
    }
    right++;
  }
  return res === nums.length + 1 ? 0 : res;
}
/*
// 暴力解法
export function minSubArrayLen(target: number, nums: number[]): number {
  const len = nums.length;
  let result = Number.MAX_SAFE_INTEGER; // 最终的结果
  let sum = 0; // 子序列的数值之和
  let subLength = 0; // 子序列的长度
  for (let i = 0; i < len; i++) {
    // 设置子序列起点为i
    sum = 0;
    for (let j = i; j < len; j++) {
      // 设置子序列终止位置为j
      sum += nums[j];
      if (sum >= target) {
        subLength = j - i + 1; // 取子序列的长度
        result = result < subLength ? result : subLength;
        break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

*/

function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过重复的元素
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 左指针
    let left = i + 1;
    // 右指针
    let right = nums.length - 1;
    // 当左指针小于右指针时，执行循环
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // 将这三个数添加到结果数组中
        results.push([nums[i], nums[left], nums[right]]);
        // 跳过重复的元素
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
}

export { threeSum };

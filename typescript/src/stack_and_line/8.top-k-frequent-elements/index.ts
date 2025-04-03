function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
  nums.forEach((v) => {
    countMap.set(v, (countMap.get(v) ?? 0) + 1);
  });

  return Array.from(countMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => v[0]);
}

export { topKFrequent };

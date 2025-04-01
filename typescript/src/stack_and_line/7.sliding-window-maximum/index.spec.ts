import { maxSlidingWindow } from './index';

describe('滑动窗口最大值', () => {
  test('基本测试用例', () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;
    expect(maxSlidingWindow(nums, k)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  test('单元素数组', () => {
    const nums = [1];
    const k = 1;
    expect(maxSlidingWindow(nums, k)).toEqual([1]);
  });

  test('k等于数组长度', () => {
    const nums = [1, 2, 3, 4];
    const k = 4;
    expect(maxSlidingWindow(nums, k)).toEqual([4]);
  });

  test('包含负数的数组', () => {
    const nums = [-7, -8, 7, 5, 7, 1, 6, 0];
    const k = 4;
    expect(maxSlidingWindow(nums, k)).toEqual([7, 7, 7, 7, 7]);
  });

  test('k等于2的情况', () => {
    const nums = [1, -1];
    const k = 1;
    expect(maxSlidingWindow(nums, k)).toEqual([1, -1]);
  });
});
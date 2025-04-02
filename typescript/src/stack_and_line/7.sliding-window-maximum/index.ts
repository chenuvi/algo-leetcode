function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = new MonotonicQueue();
  const result: number[] = [];
  // 第一次全部入队列
  for (let i = 0; i < k; i++) {
    queue.enqueue(nums[i]);
  }
  // 添加第一个窗口的最大值
  result.push(queue.top() as number);

  for (let i = k; i < nums.length; i++) {
    queue.dequeue(nums[i - k]);
    queue.enqueue(nums[i]);
    result.push(queue.top() as number);
    console.log(`queue.queue ${i}: `, queue.queue);
  }
  return result;
}
/**
 * 单调递减队列
 * 主要应用于需要在滑动窗口中快速获取最大值的场景。

 * 类方法：
 * - enqueue(value: number): void - 将新元素入队，保持队列单调递减特性
 * - dequeue(value: number): void - 移除指定元素（如果该元素是队首元素）
 * - top(): number | undefined - 获取队列中的最大值（队首元素）
 *
 *  *
 * 特点：
 * 1. 队列中的元素始终保持单调递减顺序
 * 2. 新元素入队时会移除所有小于它的元素
 * 3. 支持O(1)时间复杂度获取当前最大值
 *
 * @example
 * const queue = new MonotonicQueue();
 * queue.enqueue(3); // [3]
 * queue.enqueue(1); // [3,1]
 * queue.enqueue(2); // [3,2]
 * queue.top(); // 返回3
 * queue.dequeue(3); // [2]
 */
class MonotonicQueue {
  /** 内部存储队列元素的数组 */
  public queue: number[] = [];

  constructor() {
    this.queue = [];
  }

  /**
   * 将新元素入队
   * 入队时会移除队列中所有小于新元素的值，以保持单调递减特性
   * @param value - 要入队的数值
   * @returns void
   */
  public enqueue(value: number): void {
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < value) {
      this.queue.pop();
    }
    this.queue.push(value);
  }

  /**
   * 移除指定元素
   * 仅当指定元素等于队首元素时才会执行移除操作
   * @param value - 要移除的数值
   * @returns void
   */
  public dequeue(value: number): void {
    let top = this.top();
    if (top !== undefined && top === value) {
      this.queue.shift();
    }
  }

  /**
   * 获取队列中的最大值（队首元素）
   * @returns number | undefined - 返回队首元素，如果队列为空则返回undefined
   */
  public top(): number | undefined {
    return this.queue[0];
  }
}

export { maxSlidingWindow };

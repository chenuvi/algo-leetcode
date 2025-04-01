function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = new MonotonicQueue();
  const result: number[] = [];
  return result;
}

class MonotonicQueue {
  private queue: number[] = [];
  constructor() {
    this.queue = [];
  }
  public enqueue(value: number) {}
  public dequeue(value: number) {}
  public top() {
    return this.queue[0];
  }
}

export { maxSlidingWindow };

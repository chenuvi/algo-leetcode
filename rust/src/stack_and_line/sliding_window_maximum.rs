use crate::Solution;
// TODO: 优化方法
// 提示 std::collections::VecDeque;
impl Solution {
    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut queue = MonotonicQueue::new();
        let mut result = Vec::new();
        let k = k as usize;
        // 初始化第一个窗口
        for i in 0..k {
            queue.enqueue(*nums.get(i).unwrap());
        }
        result.push(queue.top());

        // 滑动窗口
        for i in k..nums.len() {
            queue.dequeue(*nums.get(i - k).unwrap());
            queue.enqueue(*nums.get(i).unwrap());
            result.push(queue.top());
        }
        result
    }
}

struct MonotonicQueue {
    queue: Vec<i32>,
}

impl MonotonicQueue {
    pub fn new() -> Self {
        MonotonicQueue { queue: Vec::new() }
    }

    pub fn top(&self) -> i32 {
        *self.queue.first().unwrap()
    }

    pub fn enqueue(&mut self, value: i32) {
        while !self.queue.is_empty() && *self.queue.last().unwrap() < value {
            self.queue.pop();
        }
        self.queue.push(value);
    }

    pub fn dequeue(&mut self, value: i32) {
        if !self.queue.is_empty() && self.top() == value {
            self.queue.remove(0);
        }
    }
}
